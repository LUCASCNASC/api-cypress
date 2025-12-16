const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v3_pedido_finalizar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Pedido - POST - /Pedido/v3_pedido_finalizar', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
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