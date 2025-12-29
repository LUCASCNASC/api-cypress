const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_post_logistica_informanumeroseriepedidoloja';
const Authorization = Cypress.env('API.PRAGMA');

describe('Logística - POST - /Logística/v3_post_logistica_informanumeroseriepedidoloja', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
      });
  });
});