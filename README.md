# Whodidit - Jogo de Correspondência de Crimes

Este é um jogo interativo onde os usuários devem associar crimes aos criminosos corretos com base em fotos e descrições. O projeto foi desenvolvido com React no frontend e Node.js com MongoDB no backend.

## Funcionalidades

- **Seleção Aleatória:** Exibe 5 criminosos aleatórios de um banco de dados.
- **Arrastar e Soltar:** Permite que os usuários arrastem crimes para as fotos dos criminosos.
- **Verificação de Respostas:** Após preencher todas as zonas, o usuário pode verificar suas respostas.
- **Gabarito e Feedback:** Exibe o gabarito e as respostas do usuário, com indicação de acertos e erros.
- **Reiniciar:** Permite reiniciar o jogo para tentar novamente.

## Tecnologias Utilizadas

- **Frontend:** React, React DnD (Drag and Drop), CSS.
- **Backend:** Node.js, Express, MongoDB.
- **Outras Ferramentas:** React Router para navegação entre páginas.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- MongoDB rodando localmente ou um URI de conexão para um banco de dados remoto.

### Passos para Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/whodidit.git
   cd whodidit
   ```

2. **Instale as dependências do backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Configure o arquivo `.env` no backend:**

   Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:

   ```plaintext
   MONGO_URI=sua_mongo_uri_aqui
   PORT=5000
   ```

4. **Inicie o backend:**

   ```bash
   node server.js
   ```

5. **Instale as dependências do frontend:**

   Em outro terminal, navegue até a pasta do frontend e instale as dependências:

   ```bash
   cd ../frontend
   npm install
   ```

6. **Inicie o frontend:**

   ```bash
   npm start
   ```

7. **Acesse o projeto:**

   Abra o navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

- **backend/**: Contém o código do servidor Node.js e a conexão com o MongoDB.
- **frontend/**: Contém o código do frontend React, incluindo componentes e estilos.
- **styles.css**: Arquivo CSS global para estilização do projeto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
