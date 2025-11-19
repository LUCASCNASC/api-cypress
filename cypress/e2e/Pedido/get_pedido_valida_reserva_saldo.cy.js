const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v3_pedido_valida_reserva_saldo';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pedido - GET - /v3/pedido_valida_reserva_saldo/{idFilial}/{idPedidoVenda}', { env: { hideCredendials: true } }, () => {

  const idFilial = "12345678910"; 
  const idPedidoVenda = "12345678910";
  
    it('Resposta 204', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idPedidoVenda}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(204);
          expect(response.duration).to.be.below(2000);
        });
    });
  });