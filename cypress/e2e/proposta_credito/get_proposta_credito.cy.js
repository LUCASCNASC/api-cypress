const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Proposta%20crédito/v2_proposta_credito_get';
const Authorization = Cypress.env('API.PRAGMA');

const data_inicial = "yyyy-mm-dd";
const vendedor = "12345678910";
const cliente = "12345678910";
const limit = "12345678910";
const offset = "12345678910";

describe('Proposta crédito - GET - /v3/proposta_credito/{data_inicial}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${data_inicial}/${vendedor}/${cliente}/${limit}/${offset}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('size');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('item');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('nomeCliente');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('dataHoraUltimaAtualizacao');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('entidadeFinanceira');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('tempoDecorrido');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('pedidoVenda');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('propostaCredito');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('vendedor');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('analista');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('situacaoProposta');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('autorizacaoFinanceira');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('numeroFinanceira');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('totalPedido');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('negadoPor');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('filial');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('idSituacaoProposta');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('processoVenda');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('processoAReceber');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('cliente');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('idVendedor');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('quantidadeParcelas');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('idEntidadeFinanceira');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('situacaoPedidoVenda');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('vencimentosPedidoVenda');
        expect(resposta.body.retorno[0].data[0]).toHaveProperty('Fiador');
        expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('dataInicial');
        expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('dataFim');
        expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('usuario');
        expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('situacao');
        expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('adicional');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('DescricaoMotivo');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('situacao');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('analista');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('dataAnalise');
        expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('ordem');
      });
  });
});