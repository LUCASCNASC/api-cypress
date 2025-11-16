const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_dados_tabela';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/dados_tabela/{tabela}', { env: { hideCredentials: true } }, () => {

  const tabelaSemDados = "tabela_inexistente";
  const tabelaInvalida = "!@#";
  const tabelaValida = "123";
  
  it('Deve retornar 200 e as propriedades da tabela', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${tabelaValida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigo');
      expect(ret).to.have.property('descricao');
    });
  });

  it('Deve retornar 204 quando não houver dados para a tabela informada', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${tabelaSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para tabela inválida', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${tabelaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});