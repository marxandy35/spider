from gns3server.web.route import Route
from gns3server.controller import Controller
from gns3server.schemas.version import VERSION_SCHEMA
from gns3server.schemas.iou_license import IOU_LICENSE_SETTINGS_SCHEMA

from aiohttp.web import HTTPConflict, HTTPForbidden

import json
import mysql.connector
from mysql.connector import Error
from datetime import datetime

import logging

log = logging.getLogger(__name__)

class UserHandler:

    @Route.get(
        r"/usuarios",
        description="Buscar usuários",
        output_schema=None)
    def get_usuarios(request, response):
        try:
            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                'SELECT id, login, nome, curso, senha, perfil, projetos, ultimo_login, acessos FROM usuarios'
            )
            rows = cursor.fetchall()

            for row in rows:
                row['ultimo_login'] = row['ultimo_login'].isoformat() if row['ultimo_login'] else None
                row['acessos'] = json.loads(row['acessos']) if row['acessos'] else []

            cursor.close()
            connection.close()
            response.json(rows)
        except Exception as e:
            log.error(f'Erro ao buscar usuários no banco de dados: {e}')
            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.post(
        r"/login",
        description="Realizar o login",
        status_codes={
            200: "Autenticação bem-sucedida",
            401: "Credenciais inválidas"
        })
    def login(request, response):
        try:
            data = request.json
            login = data.get('login')
            senha = data.get('senha')

            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                'SELECT id, login, nome, curso, senha, perfil, projetos, ultimo_login, acessos FROM usuarios WHERE login = %s AND senha = %s',
                (login, senha),
            )
            rows = cursor.fetchall()

            if len(rows) == 1:
                user_id = rows[0]['id']
                # Adiciona o timestamp do login atual ao campo acessos
                current_time = datetime.now().isoformat()
                acessos = json.loads(rows[0]['acessos']) if rows[0]['acessos'] else []
                acessos.append(current_time)
                acessos_json = json.dumps(acessos)

                cursor.execute(
                    'UPDATE usuarios SET ultimo_login = CURRENT_TIMESTAMP(), acessos = %s WHERE id = %s',
                    (acessos_json, user_id),
                )
                connection.commit()

                user = {**rows[0], 'ultimo_login': current_time}
                response.json(user)
            else:
                response.text = json.dumps({'message': 'Credenciais inválidas'})
                response.set_status(401)
        except Exception as e:
            log.error(f'Erro ao autenticar usuário no banco de dados: {e}')
            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.get(
        r"/usuarios/{user_id}",
        description="Buscar usuário por ID",
        output_schema=None)
    def get_usuario_por_id(request, response):
        try:
            user_id = request.match_info.get('user_id')
            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                'SELECT id, login, nome, curso, senha, perfil, projetos, ultimo_login, acessos FROM usuarios WHERE id = %s',
                (user_id,),
            )
            row = cursor.fetchone()
            cursor.close()
            connection.close()

            if row:
                row['ultimo_login'] = UserHandler.serialize_datetime(row['ultimo_login'])
                row['acessos'] = json.loads(row['acessos']) if row['acessos'] else []
                response.json(row)
            else:
                response.text = json.dumps({'message': 'Usuário não encontrado'})
                response.set_status(404)
        except Exception as e:
            log.error(f'Erro ao buscar usuário por ID no banco de dados: {e}')
            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.post(
        r"/usuarios",
        description="Cadastrar novo usuário",
        status_codes={
            201: "Usuário cadastrado com sucesso"
        })
    def cadastrar_usuario(request, response):
        try:
            data = request.json
            login = data.get('login')
            nome = data.get('nome')
            curso = data.get('curso')
            senha = data.get('senha')
            perfil = data.get('perfil')
            projetos = data.get('projetos')

            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                'INSERT INTO usuarios (login, nome, curso, senha, perfil, projetos) VALUES (%s, %s, %s, %s, %s, %s)',
                (login, nome, curso, senha, perfil, projetos),
            )
            user_id = cursor.lastrowid
            connection.commit()
            cursor.close()
            connection.close()

            response.set_status(201)
            response.headers['Location'] = f'/usuarios/{user_id}'
        except Exception as e:
            log.error(f'Erro ao cadastrar novo usuário no banco de dados: {e}')
            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.put(
        r"/usuarios/{user_id}",
        description="Atualizar dados do usuário por ID",
        status_codes={
            200: "Usuário atualizado com sucesso",
            404: "Usuário não encontrado",
            500: "Erro interno do servidor"
        })
    def atualizar_usuario(request, response):
        try:
            user_id = request.match_info.get('user_id')
            data = request.json
            login = data.get('login')
            perfil = data.get('perfil')
            nome = data.get('nome')
            curso = data.get('curso')
            senha = data.get('senha')
            projetos = data.get('projetos')

            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)

            cursor.execute('SELECT id FROM usuarios WHERE id = %s', (user_id,))
            user_rows = cursor.fetchall()

            if len(user_rows) != 1:
                response.text = json.dumps({'message': 'Usuário não encontrado'})
                response.set_status(404)
                return

            if senha:
                cursor.execute(
                    'UPDATE usuarios SET login = %s, perfil = %s, nome = %s, curso = %s, senha = %s, projetos = %s WHERE id = %s',
                    (login, perfil, nome, curso, senha, json.dumps(projetos), user_id)
                )
            else:
                cursor.execute(
                    'UPDATE usuarios SET login = %s, perfil = %s, nome = %s, curso = %s, projetos = %s WHERE id = %s',
                    (login, perfil, nome, curso, json.dumps(projetos), user_id)
                )

            connection.commit()
            cursor.close()
            connection.close()

            response.json({'success': True, 'message': 'Usuário atualizado com sucesso!'})
        except Exception as e:
            log.error(f'Erro ao atualizar usuário: {e}')

            try:
                if connection:
                    connection.rollback()
                    connection.close()
            except Exception as rollback_error:
                log.error(f'Erro ao fazer rollback da transação: {rollback_error}')

            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.delete(
        r"/usuarios/{user_id}",
        description="Deletar usuário por ID",
        status_codes={
            204: "Usuário deletado com sucesso",
            404: "Usuário não encontrado"
        })
    def deletar_usuario(request, response):
        try:
            user_id = request.match_info.get('user_id')

            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute(
                'DELETE FROM usuarios WHERE id = %s',
                (user_id,),
            )
            rows_affected = cursor.rowcount
            connection.commit()
            cursor.close()
            connection.close()

            if rows_affected > 0:
                response.set_status(204)
            else:
                response.text = json.dumps({'message': 'Usuário não encontrado'})
                response.set_status(404)
        except Exception as e:
            log.error(f'Erro ao deletar usuário por ID no banco de dados: {e}')
            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)

    @Route.put(
        r"/usuarios/{user_id}/projetos",
        description="Atualizar projetos do usuário por ID",
        status_codes={
            200: "Projetos do usuário atualizados com sucesso",
            404: "Usuário não encontrado",
            500: "Erro interno do servidor"
        })
    def atualizar_projetos(request, response):
        try:
            user_id = request.match_info.get('user_id')
            data = request.json
            projetos = data.get('projetos')

            connection = UserHandler.create_connection()
            cursor = connection.cursor(dictionary=True)

            cursor.execute('SELECT id FROM usuarios WHERE id = %s', (user_id,))
            user_rows = cursor.fetchall()

            if len(user_rows) != 1:
                response.text = json.dumps({'message': 'Usuário não encontrado'})
                response.set_status(404)
                return

            cursor.execute('UPDATE usuarios SET projetos = %s WHERE id = %s', (json.dumps(projetos), user_id))

            connection.commit()
            cursor.close()
            connection.close()

            response.json({'success': True, 'message': 'Projetos do usuário atualizados com sucesso!'})
        except Exception as e:
            log.error(f'Erro ao atualizar projetos do usuário: {e}')

            try:
                if connection:
                    connection.rollback()
                    connection.close()
            except Exception as rollback_error:
                log.error(f'Erro ao fazer rollback da transação: {rollback_error}')

            response.text = json.dumps({'message': 'Erro interno do servidor'})
            response.set_status(500)


    @Route.get(
        r"/projetos",
        description="List projects",
        status_codes={
            200: "List of projects",
        })
    def list_projects(request, response):
        controller = Controller.instance()
        response.json([p for p in controller.projects.values()])

    @staticmethod
    def create_connection():
        connection = None
        try:
            connection = mysql.connector.connect(
                host='localhost',
                user='alfa',
                password='escom123',
                database='spider',
            )
            return connection
        except Error as e:
            log.error(f"Error: {e}")
            return None

    @staticmethod
    def serialize_datetime(dt):
        return dt.isoformat() if dt else None
