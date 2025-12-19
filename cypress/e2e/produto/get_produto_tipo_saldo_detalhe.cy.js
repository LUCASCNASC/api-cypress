const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Produto/v3_produto_tipo_saldo_detalhe';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialSaldo = "12345678910"; 
const sku = "12345678910";
const idTipoSaldoProduto = "12345678910"; 

describe('API rest - Produto - GET - /Produto/v3_produto_tipo_saldo_detalhe', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${idFilialSaldo}/${sku}/${idTipoSaldoProduto}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialOrigem');
        expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialDestino');
        expect(resposta.body.retorno[0]).toHaveProperty('idPedidoLoja');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaoTipoUrgenciaReserva');
        expect(resposta.body.retorno[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoPedidoLoja');
        expect(resposta.body.retorno[0]).toHaveProperty('idMapaCargaLoja');
        expect(resposta.body.retorno[0]).toHaveProperty('idPedidoVenda');
        expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialFaturar');
        expect(resposta.body.retorno[0]).toHaveProperty('nomeCliente');
        expect(resposta.body.retorno[0]).toHaveProperty('dataInclusao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoPedidoVenda');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaoLocalSaldo');
        expect(resposta.body.retorno[0]).toHaveProperty('idPedidoCompra');
        expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoEntrega');
        expect(resposta.body.retorno[0]).toHaveProperty('idRegistroNota');
        expect(resposta.body.retorno[0]).toHaveProperty('dataEmissao');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdeDiasTransito');
        expect(resposta.body.retorno[0]).toHaveProperty('dataSaida');
        expect(resposta.body.retorno[0]).toHaveProperty('totalNota');
        expect(resposta.body.retorno[0]).toHaveProperty('idAssistencia');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoAssitencia');
      });
  });
});