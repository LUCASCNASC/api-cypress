const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_banco_delete';
const Authorization = Cypress.env('API.PRAGMA');

const codigoValido = "123123123";
const codigoInvalido = "99999";

describe('API rest - Financeiro - DELETE /Financeiro/v3_financeiro_banco_delete', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${codigoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 404 e 412', () => {
    cy.api({({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${codigoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});