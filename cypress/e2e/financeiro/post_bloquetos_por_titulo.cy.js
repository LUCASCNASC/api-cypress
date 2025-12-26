const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_bloquetos_por_titulo';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_financeiro_bloquetos_por_titulo', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 321,
        tipoDocumento: "PDF"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 412', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null,
        tipoDocumento: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});