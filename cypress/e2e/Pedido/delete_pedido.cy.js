const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v2_pedido_get_delete2';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pedido - DELETE - /v3/pedido/{codigo}', { env: { hideCredendials: true } }, () => {

  const codigo = "12345678910"; 
  const idfilial = "12345678910";
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/${PATH_API}/${codigo}/${idfilial}`, 
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