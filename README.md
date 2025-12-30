# automacao-api
Projeto de automação de testes de API utilizando [Cypress](https://www.cypress.io/).

## Sobre
Este projeto foi criado para automatizar testes de API, garantindo qualidadeandconfiabilidade nos endpoints de backend.  
O repositório está configurado para manter informações sensíveis, como URLs de ambiente, protegidasandfora do controle de versão.

## Como começar
1. **Clone o repositório**

   ```sh
   git clone https://github.com/LUCASCNASC/automacao-api.git
   cd automacao-api
   ```
2. **Crie seu arquivo `.env`**

   Copie o arquivo de exemploandedite com as informações corretas:
   ```sh
   cp .env.example .env
   ```
   Edite o `.env` colocando o valor correto para a variável `API_URL`.

3. **Instale as dependências**

   ```sh
   npm install
   ```
4. **Execute os testes**

   ```sh
   npx cypress open
   ```
## Estrutura
- `cypress.config.js`: Arquivo de configuração do Cypress.
- `.env`and`.env.example`: Arquivos para configurar variáveis de ambiente (API_URL).
- `.gitignore`: Impede que arquivos sensíveis sejam versionados.

## Boas práticas
- Nunca compartilhe seu arquivo `.env` ou informações sensíveis.
- Sempre atualize o `.env.example` com novas variáveis de ambiente necessárias.
- Consulte a documentação do Cypress para mais detalhes de configuração.
---

> Projeto mantido por [LUCASCNASC](https://github.com/LUCASCNASC)
