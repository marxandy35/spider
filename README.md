# SPIDER: Simulador de Proteção de Infraestrutura de Redes

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![Angular](https://img.shields.io/badge/Angular-Frontend-DD0031.svg)](https://angular.io/)
[![GNS3 Server](https://img.shields.io/badge/GNS3%20Server-2.2-green.svg)](https://gns3.com/)
[![MariaDB](https://img.shields.io/badge/Database-MariaDB%20%2F%20MySQL-orange.svg)](https://mariadb.org/)
[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

O **SPIDER** (*Simulador de Proteção de Infraestrutura de Redes*) é uma plataforma web voltada ao provisionamento e simulação de ambientes computacionais e topologias de rede didáticas de alta fidelidade. O projeto estende as capacidades do **GNS3 Server**, integrando uma arquitetura multiusuário com controle de acesso granular (RBAC), auditoria de sessões, isolamento de laboratórios por perfil e uma interface moderna compilada em **Angular**.

---

## 📌 Contexto e Justificativa

Em ambientes acadêmicos e centros de treinamento em TI, a execução de simuladores e emuladores locais encontra entraves severos de hardware, esgotamento de armazenamento e sobrecarga operacional. Embora o **GNS3** ofereça emulação com imagens reais de rede e sistemas operacionais (QEMU/KVM, VPCS, Dynamips), sua arquitetura padrão opera de maneira **monousuária** e sem barreira nativa de autenticação granular na interface.

O **SPIDER** transforma o GNS3 em uma solução centralizada, segura e multiusuário para ensino:
- **Camada de Autenticação Segura:** Protege o acesso ao servidor via HTTPS com login, senha (MD5/criptografada) e registro de último login.
- **Auditoria de Sessões:** Mapeamento histórico contínuo de acessos salvos na base relacional.
- **Segregação por Perfil e Curso:** Perfis de **ADMIN** (instrutor) e **ALUNO**, com liberação de instâncias de projetos restritas ao vínculo acadêmico.
- **Independência de Infraestrutura:** Pode operar diretamente no hardware local (*bare-metal*) ou virtualizado em servidores tipo Proxmox VE.

---

## 🏛️ Arquitetura do Sistema

[ Navegador Web (HTTPS:443) ]
                                   │
                                   ▼
              ┌─────────────────────────────────────────┐
              │          SPIDER Web Frontend            │
              │   (Interface Customizada em Angular)    │
              └────────────────────┬────────────────────┘
                                   │ Requisições REST/JSON
                                   ▼
              ┌─────────────────────────────────────────┐
              │            GNS3 Server API              │
              │    /gns3server/handlers/api/controller  │
              ├────────────────────┬────────────────────┤
              │   user_handler.py  │  _init__.py        │
              └─────────┬──────────┴──────────┬─────────┘
                        │                     │
            mysql-connector-python            │ Orquestração
                        ▼                     ▼
              ┌────────────────────┐   ┌─────────────────┐
              │  MariaDB / MySQL   │   │     Emuladores  │
              │  Database (spider) │   │ QEMU / KVM /    │
              │  Tabela `usuarios` │   │ VPCS / Dynamips │
              └────────────────────┘   └─────────────────┘


<img width="799" height="574" alt="arquitetura" src="https://github.com/user-attachments/assets/a7d2cf18-dcf9-465a-b813-996ca5142c87" />




### Componentes Internos
1. **Frontend Angular (`/gns3server/static/`):** Painel web responsivo para autenticação, seleção de projetos permitidos, documentação e visualização do laboratório.
2. **Controlador de Usuários (`user_handler.py`):** Injeta rotas HTTP para cadastro, gerenciamento de perfil, permissão de projetos e auditoria.
3. **Instalador Automatizado (`spider_install.sh`):** Script em Bash com interface TUI via `dialog` que automatiza a configuração do MariaDB, drivers Python, substituição de controladores do GNS3 e certificados SSL.

---

## 📡 Rotas da API Injetadas no GNS3

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/login` | Autentica o usuário e atualiza a coluna `ultimo_login` e o array `acessos` |
| `GET` | `/usuarios` | Lista todos os usuários cadastrados na base de dados |
| `POST` | `/usuarios` | Registra novo usuário com perfil (ADMIN/ALUNO) e curso |
| `GET` | `/usuarios/{user_id}` | Retorna detalhes cadastrais e histórico de acesso do usuário |
| `PUT` | `/usuarios/{user_id}` | Atualiza cadastro e credenciais |
| `DELETE` | `/usuarios/{user_id}` | Exclui a conta do usuário |
| `PUT` | `/usuarios/{user_id}/projetos` | Sincroniza o array JSON de laboratórios autorizados |
| `GET` | `/projetos` | Atalho para consulta de projetos globais do GNS3 |

---

## 🗄️ Estrutura do Banco de Dados (`spider`)

Tabela: `usuarios`

```sql
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


🚀 Instalação e Implantação
Pré-requisitos

    Sistema Operacional Linux (Ubuntu 20.04/22.04 LTS ou Debian 11/12)

    GNS3 Server 2.2+ instalado via pacotes/pip

    Privilégios de superusuário (root)

Executando o Instalador Automatizado

    Clone o repositório no servidor onde o GNS3 está instalado:

Bash

git clone [https://github.com/SEU_USUARIO/spider.git](https://github.com/SEU_USUARIO/spider.git)
cd spider

    Torne o instalador executável e inicie como root:

Bash

chmod +x spider_install.sh
sudo ./spider_install.sh

    O assistente em modo texto (dialog) solicitará:

        Definição da senha de root do MariaDB.

        Definição da senha para o usuário da aplicação (alfa).

        O script cuidará do deployment dos arquivos, permissões do GNS3 e certificados SSL.

🔒 Configuração do Servidor (gns3_server.conf)

O instalador padroniza a operação segura do serviço:
Ini, TOML

[Server]
host = 0.0.0.0
port = 443
images_path = /opt/gns3/images
projects_path = /opt/gns3/projects
report_errors = True
auth = False
protocol = https
ssl = True
certfile = /home/gns3/.config/GNS3/ssl/server.cert
certkey = /home/gns3/.config/GNS3/ssl/server.key
api_port = 3000

[Qemu]
enable_kvm = true
