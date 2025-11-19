const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_post_logistica_informanumeroseriepedidoloja';
const Authorization = Cypress.env('API.PRAGMA');

describe('Logística - POST - /v3/informa_numero_serie_pedido_loja', { env: { hideCredendials: true } }, () => {

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