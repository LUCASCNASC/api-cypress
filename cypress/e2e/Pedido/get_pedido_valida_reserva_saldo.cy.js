const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v3_pedido_valida_reserva_saldo';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910"; 
const idPedidoVenda = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v3_pedido_valida_reserva_saldo', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 204', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${idFilial}/${idPedidoVenda}`, 
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