const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_agencia_delete';
const Authorization = Cypress.env('API.PRAGMA');

const codigoBancoValido = "123123123";
const codigoAgenciaValido = "123456";
const codigoBancoInvalido = "99999";
const codigoAgenciaInvalida = "99999";

describe('Financeiro - DELETE /Financeiro/v3_financeiro_agencia_delete', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${codigoBancoValido}/${codigoAgenciaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 404 e 412', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${codigoBancoInvalido}/${codigoAgenciaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});