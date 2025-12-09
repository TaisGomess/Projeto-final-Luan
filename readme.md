📦 Projeto Final – Desenvolvimento Web II
🎯 Objetivo desta etapa

O objetivo deste projeto é desenvolver um sistema web utilizando React no frontend e Node.js no backend, integrando funcionalidades de CRUD por meio de API REST, comunicação em tempo real utilizando WebSocket e organização da lógica por meio de hooks customizados no frontend.

A aplicação permite gerenciamento de usuários, produtos e comunicação via chat em tempo real, aplicando conceitos modernos do desenvolvimento web.

▶️ Instruções para execução
1. Clonar o repositório
git clone https://github.com/TaisGomess/Projeto-final-Luan.git

2. Instalar dependências
npm install

3. Executar o frontend
npm run dev


Acesse no navegador:

http://localhost:5173

⚙️ Instruções de Build (Vite)

Para gerar os arquivos de produção:

npm run build


Para visualizar a build localmente:

npm run preview

🗂️ Entidades do CRUD

As entidades implementadas no projeto são:

Usuários

Produtos

Chat

Cada entidade possui operações completas de:

Criação

Listagem

Atualização

Remoção

🌐 Comunicação WebSocket

O WebSocket foi utilizado para permitir comunicação em tempo real, principalmente no módulo de chat.

A implementação permite:

Envio e recebimento de mensagens instantaneamente

Atualização automática da interface

Comunicação contínua entre frontend e backend sem necessidade de requisições constantes

🎣 Hooks Customizados

Foram criados hooks customizados para organização da lógica da aplicação:

useWebSocket

Responsável por:

Estabelecer conexão com o servidor WebSocket

Escutar mensagens recebidas

Controlar o estado das mensagens em tempo real

useListProductsApi

Responsável por:

Realizar requisições HTTP na API REST

Listar produtos vindos do backend

Centralizar regras de consumo da API

🌍 Rotas da API utilizadas
Usuários
GET    http://localhost:3000/usuarios
POST   http://localhost:3000/usuarios
PUT    http://localhost:3000/usuarios/:id
DELETE http://localhost:3000/usuarios/:id

Produtos
GET    http://localhost:3000/produtos
POST   http://localhost:3000/produtos
PUT    http://localhost:3000/produtos/:id
DELETE http://localhost:3000/produtos/:id

Chat
GET    http://localhost:3000/chat
POST   http://localhost:3000/chat

✅ Tecnologias utilizadas

React

TypeScript

Vite

WebSocket

Node.js

Express

Swagger

Git e GitHub

👩‍💻 Autora

Taís Gomes
Curso: Análise e Desenvolvimento de Sistemas – UniFAAT

#### ⚠️ Importante

Execute as migrations antes das seeds.

#### 🚀 Execução das Seeds

Ordena os arquivos e executa `up()`, com suporte a rollback via `down()`.

#### ✅ Boas Práticas

- Escopo pequeno por seed
- Sempre implemente `down()`
- Não reutilize emails/names
- Não use em lógica de produção


---

## 📦 Bibliotecas Utilizadas <a name="bibliotecas-utilizadas"></a>

| Biblioteca            | Finalidade                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| `express`             | Framework web para Node.js usado para criar APIs e servidores HTTP.        |
| `chalk`               | Biblioteca para estilizar saídas no terminal com cores e ênfases.          |
| `dotenv`              | Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.     |
| `pg`                  | Cliente PostgreSQL para Node.js, usado para conexão e execução de queries. |
| `sequelize`           | ORM (Object-Relational Mapping) para trabalhar com bancos relacionais.     |
| `jsonwebtoken`        | Geração e verificação de tokens JWT para autenticação.                     |
| `bcrypt`              | Criptografia e comparação de senhas com hash seguro.                       |
| `swagger-jsdoc`       | Gera especificações Swagger a partir de JSDoc nos comentários do código.   |
| `swagger-ui-express`  | Middleware que serve a UI do Swagger para documentar e testar APIs.        |
| `express-fileupload`  | Middleware para lidar com upload de arquivos via `multipart/form-data`.    |
| `minimist`            | Faz o parsing de argumentos de linha de comando.                           |
| `cli-table3`          | Cria tabelas formatadas para exibição no terminal.                         |
| `axios`               | Cliente HTTP para fazer requisições a APIs externas.                       |
| `amqplib`             | Biblioteca cliente para comunicação com RabbitMQ via protocolo AMQP.       |
| `nodemon`             | Ferramenta que reinicia automaticamente a aplicação ao detectar mudanças.  |
| `vite`                | servidor de desenvolvimento e bundler com HMR (Hot Module Replacement) para projetos web modernos; inicializa rápido e recarrega as mudanças instantaneamente.  |

---

## 📁 Estrutura de Diretórios (raiz) <a name="estrutura-de-diretorios-raiz"></a>

| Caminho / Pasta             | Descrição                                                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| `app/`                      | Lógica principal da aplicação organizada por domínio.                                                     |
| `app/Commands/`             | Comandos CLI como `migrate`, `seed`, `dispatch`, executados com `node command <comando>`.                |
| `app/Http/`                 | Código relacionado as requisições HTTP.                                                                   |
| `app/Http/Controllers/`     | Controllers que lidam com requisições e respostas das rotas.                                              |
| `app/Http/Middlewares/`     | Middlewares como autenticação, validação e logger HTTP.                                                   |
| `app/Models/`               | Models Sequelize que representam e manipulam tabelas do banco de dados.                                  |
| `bootstrap/`                | Inicializações específicas do projeto, como setup global de helpers, constantes e variáveis de ambiente.  |
| `config/`                   | Arquivos de configuração para serviços como RabbitMQ, Postgres, JWT, Sequelize, Swagger, etc.             |
| `Core/`                     | Núcleo do sistema, como se fosse uma lib interna criada por nós mesmos.                                   |
| `database/migrations/`      | Scripts de criação/modificação de tabelas versionados.                                                    |
| `database/seeds/`           | Scripts para popular dados iniciais no banco.                                                             |
| `docker/`                   | Dockerfiles específicos para cada serviço da aplicação.                                                   |
| `docs/`                     | (Opcional) Documentação de APIs Swagger em JSON.                                                          |
| `node_modules/`             | Pacotes npm instalados automaticamente.                                                                   |
| `public/`                   | Arquivos públicos (como `index.html`) servidos diretamente por HTTP.                                      |
| `routes/`                   | Arquivos de definição de rotas, geralmente organizados por entidade.                                      |
| `storage/`                  | Uploads, arquivos temporários ou pastas auxiliares da aplicação.                                          |
| `.env`                      | Variáveis de ambiente sensíveis carregadas em tempo de execução.                                          |
| `.env.example`              | Template de `.env` para novos devs copiarem e configurarem.                                               |
| `.gitignore`                | Lista de arquivos e pastas que o Git deve ignorar.                                                        |
| `command`                   | Entry point dos comandos CLI (`node command ...`).                                                        |
| `docker-compose.yml`        | Arquivo de orquestração dos containers (web, worker, postgres, rabbit, etc).                             |
| `Insomnia.yaml`             | Export das rotas da API para importar no Insomnia.                                                        |
| `package.json`              | Lista de dependências, scripts npm e metadados do projeto.                                                |
| `package-lock.json`         | Trava exata das versões das dependências instaladas.                                                      |
| `readme.md`                 | Documentação principal do projeto (este arquivo).                                                         |
| `server.js`                 | Entry point HTTP da aplicação. Sobe o Express e inicializa a API.                                         |

---

## 🧾 Como Criar um Novo Documento Swagger<a name="swagger"></a>

Este projeto utiliza o Swagger para documentar a API de forma modular. Cada grupo de endpoints possui um arquivo `.js` dentro do diretório `docs/`, e todos são unidos dinamicamente pelo `SwaggerCore`.

### 🗂 Estrutura esperada

```
docs/
├── 01-loginDoc.js
├── 02-colaboradorDoc.js
├── ...
```

### 🧑‍💻 Criando um novo arquivo de documentação

1. **Nomeie o arquivo com prefixo numérico e sufixo `Doc.js`**  
2. **Exporte um objeto no formato OpenAPI (Swagger 3.0)**  
3. **Salvar o arquivo em `./docs/`**
4. **O Swagger será montado automaticamente**

---

## 🐳 Containers e Imagens Docker <a name="containers-e-imagens-docker"></a>

### 🔧 Containers da Aplicação

| Container               | Dockerfile                             | Função                                                                 | Porta Interna |
|-------------------------|-----------------------------------------|------------------------------------------------------------------------|-------|
| `nodeweb-container`     | `docker/node24-web/Dockerfile.dev`        | API HTTP principal (`server.js`). | 3000 |
| `nodecli-container`     | `docker/node24-cli/Dockerfile`            | Executa comandos como `migrate`, `seed`, `dispatch`. Container efêmero. | - |
| `nodevitehmr-container`     | `docker/node24-vite-hmr/Dockerfile`            | Servidor HMR Vite | 5173 |
| `nodevitecompiler-container`     | `docker/node24-vite-compiler/Dockerfile`            | Pré-Compilador JS |

### 🗄️ Containers de Infraestrutura

| Container              | Imagem Base               | Função                                                                 | Porta Interna |
|------------------------|---------------------------|------------------------------------------------------------------------|---------------|
| `postgres-container`   | `postgres:15`             | Banco de dados PostgreSQL usado pela aplicação.                        | 5432      |
| `nginx-container`      | `nginx:1.25-alpine`       | Proxy reverso que expõe a API HTTP para fora.                          | 80      |

### 💾 Volumes Persistentes

| Volume                         | Utilizado por                      | Finalidade                                          |
|--------------------------------|------------------------------------|-----------------------------------------------------|
| `nodemodules-aula04-volume` | `nodeweb`, `nodecli`, `nodevite`  | Evita reinstalação de dependências a cada build     |
| `pgdata-aula04-volume`| `postgres-container`                | Persistência dos dados do banco PostgreSQL          |

### 🌐 Redes

Todos os containers estão conectados à rede Docker personalizada:

```
app-network
```

### 🌍 Portas Expostas Externamente

| Serviço     | Porta Interna | Porta Externa | Acesso Externo                      |
|-------------|----------------|----------------|-------------------------------------|
| NGINX       | 80             | **8080**       | http://localhost:8080               |
| PostgreSQL  | 5432           | **6789**       | usado por clients (beekeeper, dbeaver, ...)/ORM/CLI               |
| Node Vite HMR    | 5173    | **5173** | http://localhost:5173  |
