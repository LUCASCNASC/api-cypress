const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_estornar_baixa_titulo';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/estornar_baixa_titulo', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 789,
        estornarTodasParciais: true
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code 500', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null,
        estornarTodasParciais: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});