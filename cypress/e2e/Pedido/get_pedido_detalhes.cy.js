const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v2_pedido_detalhes';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910"; 
const codigo = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v2_pedido_detalhes', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${idFilial}/${codigo}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;s
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        expect(resposta.body.retorno[0]).toHaveProperty('codigo_pedido');
        expect(resposta.body.retorno[0]).toHaveProperty('total_pedido');
        expect(resposta.body.retorno[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
        expect(resposta.body.retorno[0]).toHaveProperty('observacaonota');
        expect(resposta.body.retorno[0]).toHaveProperty('observacaopedido');
        expect(resposta.body.retorno[0]).toHaveProperty('geradovendamobile');
        expect(resposta.body.retorno[0]).toHaveProperty('idsituacaopedidovenda');
        expect(resposta.body.retorno[0]).toHaveProperty('idpropostacredito');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaopropostacredito');
        expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('rua');
        expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('numero');
        expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('complemento');
        expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('bairro');
        expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cep');
        expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('cidade_codigo');
        expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('cidade_nome');
        expect(resposta.body.retorno[0].endereco[0].uf[0]).toHaveProperty('uf_codigo');
        expect(resposta.body.retorno[0].endereco[0].uf[0]).toHaveProperty('uf_nome');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('iditembase');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('previsao_entrega');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('previsao_montagem');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('entrega');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('montagem');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valorunitario');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('total_item');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('local_saldo');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('imagem');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('percdescontoacrescimo');
        expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valordescontoacrescimo');
        expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('total_item');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('idprocesso');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('valor_parcela');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('primeiro_vencimento');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('quantidade_parcela');
        expect(resposta.body.retorno[0].forma_pagamento[0]).toHaveProperty('solicitarAutorizacaoFinanceira');
        expect(resposta.body.retorno[0].trial[0]).toHaveProperty('idtrial');
        expect(resposta.body.retorno[0].trial[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].trial[0]).toHaveProperty('situacao');
        expect(resposta.body.retorno[0].trial[0]).toHaveProperty('justificativa');
        expect(resposta.body.retorno[0].nota_fiscal[0]).toHaveProperty('numero');
        expect(resposta.body.retorno[0].nota_fiscal[0]).toHaveProperty('serie');
        expect(resposta.body.retorno[0].nota_fiscal[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titulo_parcela[0]).toHaveProperty('titulo_parcela');
        expect(resposta.body.retorno[0].titulo_parcela[0]).toHaveProperty('valor');
      });
  });
});