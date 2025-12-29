const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Compras/v3_post_pedido_compra_baixar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST /Compras/v3_post_pedido_compra_baixar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        NumeroPedido: "123456"
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
        NumeroPedido: "534"
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});