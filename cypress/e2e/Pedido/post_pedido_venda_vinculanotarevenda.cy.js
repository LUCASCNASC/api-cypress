const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v3_post_pedido_venda_vinculanotarevenda';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pedido - POST - /v3/pedido_venda_vinculanotarevenda/', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

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