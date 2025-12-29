const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_agencia1';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST /Financeiro/v3_financeiro_agencia1', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 201', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 100,
        nome: "Agência Central",
        endereco: "Rua Exemplo, 123"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 500', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: null,
        codigoAgencia: null,
        nome: "",
        endereco: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});