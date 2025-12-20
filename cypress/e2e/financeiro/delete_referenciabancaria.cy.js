const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_referencia_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');

const cnpjCpfValido = "123123123";
const idReferenciaBancariaValido = "123123123"; 
const cnpjCpfInvalido = "00000000000000";
const idReferenciaBancariaInvalido = "999999";

describe('API rest - Financeiro - DELETE /Financeiro/v3_financeiro_referencia_bancaria_delete', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${cnpjCpfValido}/${idReferenciaBancariaValido}`,
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
      url: `${BASE_URL}/${PATH}/${cnpjCpfInvalido}/${idReferenciaBancariaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});