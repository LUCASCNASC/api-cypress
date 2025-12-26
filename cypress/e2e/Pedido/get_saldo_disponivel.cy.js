const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v3_pedido_saldo_disponivel';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910"; 
const idPedidoVenda = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v3_pedido_saldo_disponivel', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${idFilial}/${idPedidoVenda}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idProduto');
        expect(resposta.body.retorno[0]).toHaveProperty('idGradeX');
        expect(resposta.body.retorno[0]).toHaveProperty('idGradeY');
        expect(resposta.body.retorno[0]).toHaveProperty('idLocalSaldo');
        expect(resposta.body.retorno[0]).toHaveProperty('saldoDisponivel');
        expect(resposta.body.retorno[0]).toHaveProperty('saldoTotal');
      });
  });
});