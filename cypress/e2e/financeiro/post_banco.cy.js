const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco1';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/banco', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 201', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "Banco de Teste",
        codigo: "123",
        agencia: "0001"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body.retorno[0]).to.have.property('codigo');
    });
  });

  it('Status Code 500', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "",
        codigo: null,
        agencia: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});