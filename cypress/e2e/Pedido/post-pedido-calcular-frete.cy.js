const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v2_pedido_baixar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pedido - POST - /Pedido/v2_pedido_baixar', { env: { hideCredendials: true } }, () => {
  
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