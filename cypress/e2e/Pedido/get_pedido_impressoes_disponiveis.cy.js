const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v3_pedido_impressoes_disponiveis';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910"; 
const idPedidoVenda = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v3_pedido_impressoes_disponiveis', { env: { hideCredendials: true } }, () => {
  
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
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idpedidovenda');
        expect(resposta.body.retorno[0]).toHaveProperty('imprimeNota');
        expect(resposta.body.retorno[0]).toHaveProperty('imprimecontratoservico');
        expect(resposta.body.retorno[0]).toHaveProperty('imprimecarne');
        expect(resposta.body.retorno[0]).toHaveProperty('imprimeContratoCompraVenda');
      });
  });
});