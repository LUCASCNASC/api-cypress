const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Diversos/v2_diversos_dados_tabela';
const Authorization = Cypress.env('API.PRAGMA');

const tabelaSemDados = "tabela_inexistente";
const tabelaInvalida = "!@#";
const tabelaValida = "123";

describe('API rest - Diversos - GET /Diversos/v2_diversos_dados_tabela', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${tabelaValida}`,
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

  it('Status Code is 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${tabelaSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${tabelaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});