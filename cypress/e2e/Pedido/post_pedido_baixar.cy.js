const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pedido/v2_pedido_baixar';
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_baixar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

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