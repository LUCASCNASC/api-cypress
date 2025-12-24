const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_baixa_titulo_pagar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_financeiro_baixa_titulo_pagar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 123,
        valor: 100.00,
        dataPagamento: "2025-09-22"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null,
        valor: null,
        dataPagamento: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});