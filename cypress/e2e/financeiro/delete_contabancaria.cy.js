const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_conta_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');

const codigoBancoValido = "123123123";
const codigoAgenciaValido = "123123123";
const codigoContaValido = "123123123";
const codigoBancoInvalido = "99999";
const codigoAgenciaInvalido = "99999";
const codigoContaInvalido = "99999999";

describe('API rest - Financeiro - DELETE /Financeiro/v3_financeiro_conta_bancaria_delete', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${codigoBancoValido}/${codigoAgenciaValido}/${codigoContaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code 404 e 412', () => {
  
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${codigoBancoInvalido}/${codigoAgenciaInvalido}/${codigoContaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});