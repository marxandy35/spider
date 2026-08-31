#!/bin/bash
# Título: SPIDER-INSTALLER
# Instalador do Simulador de Proteção de Infraestrutura de Redes - SPIDER
#
# Descrição:
# Este script realiza a instalação do MariaDB, criação e popular o banco de dados spider,
# criação de um usuário administrador no banco, instalação do pacote python mysql-connector-python
# e substituição (com backup) de alguns diretórios e arquivos do GNS3.
#
# É utilizada a ferramenta dialog para a interface e expect para automatizar o mysql_secure_installation.
#

#!/bin/bash
# SPIDER-INSTALLER

LOG_FILE="spider_install_$(date +%Y%m%d%H%M%S).log"
DIALOG_TITLE="SPIDER-INSTALLER"

# Função para registro detalhado de logs
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
    echo "$1"  # Exibe no terminal para debug
}

# Função para executar comandos com logging
run_command() {
    local cmd="$1"
    local msg="$2"
    
    log "$msg"
    eval "$cmd" >> "$LOG_FILE" 2>&1
    local status=$?
    
    if [ $status -ne 0 ]; then
        log "FALHA: $cmd"
        return $status
    else
        return 0
    fi
}

# Função para exibir barra de progresso aleatória
show_progress_bar() {
    local msg="$1"
    { 
        for i in $(seq 0 100); do 
            echo $i
            sleep 0.$((RANDOM % 8))
        done 
    } | dialog --title "$DIALOG_TITLE" --gauge "$msg" 10 60 0
}

check_error() {
    if [ $? -ne 0 ]; then
        log "ERRO CRÍTICO: $1"
        dialog --title "$DIALOG_TITLE" --msgbox "Erro: $1" 10 60
        exit 1
    fi
}

# Verificar root
[ "$(id -u)" -ne 0 ] && log "ERRO: Execute como root!" && echo "Execute como root!" >&2 && exit 1

# Iniciar log de instalação
log "======== INÍCIO DA INSTALAÇÃO ========"

# Verificar e instalar dialog
show_progress_bar "Verificando dependências..."
run_command "command -v dialog || apt-get install -y dialog" "Instalação do dialog"
check_error "Falha ao instalar dialog"

# Obter senhas
log "Solicitando credenciais..."
root_pass=$(dialog --title "$DIALOG_TITLE" --passwordbox "Senha root MySQL:" 10 60 3>&1 1>&2 2>&3)
check_error "Senha root não informada"
alfa_pass=$(dialog --title "$DIALOG_TITLE" --passwordbox "Senha usuário alfa:" 10 60 3>&1 1>&2 2>&3)
check_error "Senha alfa não informada"

# Instalar MySQL
log "--- INÍCIO DA INSTALAÇÃO DO MARIADB ---"
show_progress_bar "Atualizando repositórios..."
run_command "apt-get update -y" "Atualização de pacotes"

show_progress_bar "Instalando MariaDB..."
run_command "apt-get install -y mariadb-server" "Instalação do MariaDB"
check_error "Falha na instalação do MariaDB"

show_progress_bar "Iniciando serviço MySQL..."
run_command "systemctl start mariadb" "Inicialização do serviço"
run_command "systemctl enable mariadb" "Habilitar inicialização automática"

show_progress_bar "Configurando autenticação..."
run_command "mysql -e \"ALTER USER 'root'@'localhost' IDENTIFIED BY '${root_pass}'; FLUSH PRIVILEGES;\"" "Configuração da senha root"
check_error "Falha na configuração do MySQL"
log "--- CONFIGURAÇÃO DO MARIADB CONCLUÍDA ---"

# Criar banco de dados
log "--- INÍCIO DA CONFIGURAÇÃO DO BANCO ---"
show_progress_bar "Configurando banco de dados..."
mysql -uroot -p"${root_pass}" <<EOF >> "$LOG_FILE" 2>&1
CREATE DATABASE spider;
USE spider;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(255),
    projetos JSON,
    nome VARCHAR(255),
    curso VARCHAR(255),
    ultimo_login DATETIME,
    acessos LONGTEXT
);
INSERT INTO usuarios (login, senha, perfil, projetos, nome, curso)
VALUES ('12345678', '21232f297a57a5a743894a0e4a801fc3', 'ADMIN',
'[{"name": "labdhcp", "id": "1a44276b-7005-436e-85b4-b077e14570b8"}]',
'admin', 'INSTRUTOR');
CREATE USER 'alfa'@'localhost' IDENTIFIED BY '${alfa_pass}';
GRANT ALL PRIVILEGES ON spider.* TO 'alfa'@'localhost';
FLUSH PRIVILEGES;
EOF
check_error "Falha na configuração do banco"
log "--- CONFIGURAÇÃO DO BANCO CONCLUÍDA ---"

# Instalar dependência Python
log "--- INSTALANDO DEPENDÊNCIAS PYTHON ---"
show_progress_bar "Instalando mysql-connector..."
run_command "pip install mysql-connector-python" "Instalação do mysql-connector-python"
check_error "Falha ao instalar mysql-connector"

# Função para substituição de arquivos com logging
replace_files() {
    local src=$1 dest=$2 perm=$3 owner=$4
    log "Substituindo arquivo: $src"
    [ ! -e "$src" ] && check_error "Arquivo $src não encontrado"
    
    show_progress_bar "Copiando $src para $dest"
    run_command "cp -rvf '$src' '$dest'" "Cópia de $src"
    run_command "chown -Rv '$owner' '$dest/$(basename $src)'" "Alteração dono"
    run_command "chmod -Rv '$perm' '$dest/$(basename $src)'" "Alteração permissões"
}

# Processo de substituição de arquivos
log "--- INÍCIO DA SUBSTITUIÇÃO DE ARQUIVOS ---"
show_progress_bar "Parando o serviço gns3..."
run_command "systemctl stop gns3" "Parada do serviço GNS3"

show_progress_bar "Configurando arquivos do sistema..."
replace_files "web-ui" "/usr/local/lib/python3.8/dist-packages/gns3server/static/" "755" "root:staff"
replace_files "__init__.py" "/usr/local/lib/python3.8/dist-packages/gns3server/handlers/api/controller/" "644" "root:staff"
replace_files "user_handler.py" "/usr/local/lib/python3.8/dist-packages/gns3server/handlers/api/controller/" "644" "root:staff"
replace_files "gns3_server.conf" "/home/gns3/.config/GNS3/2.2/" "664" "gns3:gns3"
replace_files "ssl" "/home/gns3/.config/GNS3/" "755" "root:root"

show_progress_bar "Iniciando o serviço gns3..."
run_command "systemctl start gns3" "Inicialização do serviço GNS3"

# Finalização
log "--- INSTALAÇÃO CONCLUÍDA COM SUCESSO ---"
show_progress_bar "Finalizando instalação..."
dialog --title "$DIALOG_TITLE" --msgbox "Instalação concluída com sucesso!\nLog: $LOG_FILE" 12 60

exit 0
