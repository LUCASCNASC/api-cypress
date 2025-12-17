const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v3_pedido_totalizadores';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Pedido - POST - /Pedido/v3_pedido_totalizadores', { env: { hideCredendials: true } }, () => {
  
  it('Status Code: 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
      headers: { Authorization },
      bod: reqBody_post_pedido_totalizadores,
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotal');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalAVista');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalAVistaEntrada');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalParcelado');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorSubSobre');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('percentualRentabilidade');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('percentualMarkup');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorComissao');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('percentualMGC');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalProduto');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalAVistaProduto');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalServico');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalAVistaServico');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('sku');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('valorTotal');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('valotTotalAVista');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('valorTotalDesconto');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('valorSubSobre');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('percentualRentabilidade');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('percentualMarkup');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('valorComissao');
        expect(resposta.body.retorno[0].pedido[0].produtos[0]).toHaveProperty('percentualMGC');
        expect(resposta.body.retorno[0].pedido[0]).toHaveProperty('valorTotalDesconto');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('valorTotal');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('valotTotalAVista');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('valorSubSobre');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('valorTotalDesconto');
        expect(resposta.body.retorno[0].pedido[0].servico[0]).toHaveProperty('valorComissao');
      });
  });
});