# API Node.js com Fastify, Prisma e Swagger

API RESTful desenvolvida com **Fastify**, utilizando **Prisma** como ORM conectado a um banco **SQLite** e documentação interativa via **Swagger UI**. Todo o código está escrito em **TypeScript** e as dependências são gerenciadas via **npm**.

---

## Tecnologias Utilizadas

- **Node.js** (v18+)
- **Fastify** – framework web rápido e leve
- **@fastify/swagger** & **@fastify/swagger-ui** – geração e interface do OpenAPI
- **Prisma** – ORM para acesso ao database
- **SQLite** – banco de dados local
- **Zod** – validação de esquemas
- **TypeScript** – tipagem estática no código
- **tsx** – execução de arquivos `.ts` em tempo real (modo desenvolvimento)

---

## Pré-requisitos

```bash
# Verifique se Node.js e npm já estão instalados
node -v
npm -v
```

---

## Instalação

```bash
# Clone do repositório
git clone https://github.com/lucasdealmeidadev/api-nodejs-e-swagger
cd api-nodejs-e-swagger/server

# Instalação das dependências
npm install
```

---

## Configuração do Banco de Dados (Prisma + SQLite)

```bash
# Cria/atualiza o SQLite (arquivo dev.db) e gera o cliente Prisma
npx prisma migrate dev
```

> Caso já existam migrações aplicadas, use:
> ```bash
> npx prisma db push
> ```

---

## Variáveis de Ambiente

1. Copie `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
2. Ajuste conforme necessário (arquivo `.env.example` contém):
   ```env
   CORS_URL="*"
   FASTIFY_HOST="0.0.0.0"
   PORT=3333
   DATABASE_URL="file:./dev.db"
   ```

---

## Iniciando a API

```bash
# Modo desenvolvimento (watcher ativo)
npm run start:dev
# Ou diretamente:
npx tsx watch --env-file .env src/http/server.ts
```

A aplicação será acessível em `http://localhost:3333`.

---

## Documentação Swagger

- URL: `http://localhost:3333/swagger`
- A documentação é gerada automaticamente a partir dos esquemas **Zod** e os endpoints registrados no Fastify.

---

## Endpoints Principais (Exemplo: Usuários)

| Método | Rota | Descrição |
|--------|------|-----------|
| **POST** | `/api/users` | Cria novo usuário |
| **GET** | `/api/users` | Lista todos os usuários |
| **PUT** | `/api/users/:id` | Atualiza usuário |
| **DELETE** | `/api/users/:id` | Remove usuário |

Os esquemas de validação são implementados usando **Zod** para garantir a integridade dos dados.

---

> **Nota:** Este projeto usa **Fastify** como base e **Prisma** para persistência de dados. A integração com **Swagger** permite visualização em tempo real da documentação OpenAPI, sem necessidade de arquivos YAML ou JSON.

---
## Licença

* Licenciado sob a licença MIT - veja [LICENSE](https://github.com/lucasdealmeidadev/api-nodejs-e-swagger/blob/master/LICENSE) para mais informações.

---

Desenvolvido por Lucas de Almeida Monteiro (:  👋  [ Entrar em contato!!](https://www.linkedin.com/in/lucas-de-almeida-monteiro)