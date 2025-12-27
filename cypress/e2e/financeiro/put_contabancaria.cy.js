const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_conta_bancaria2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - PUT /Financeiro/v3_financeiro_conta_bancaria2', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 201', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 1001,
        numeroConta: "123456-7",
        titular: "Empresa Alterada"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 500', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: null,
        codigoAgencia: null,
        numeroConta: null,
        titular: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});