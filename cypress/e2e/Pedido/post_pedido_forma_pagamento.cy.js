const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v3_pedido_forma_pagamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Pedido - POST - /Pedido/v3_pedido_forma_pagamento', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('parcelaValida');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('dataPrimeiroVencimento');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('tipoOperacao');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('percentualMaximoDescontoJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('percentualMaximoAcrescimoJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('solicitarFiador');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('entradaopcionalpromocao');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('entradamenorparcelaspromocao');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('maximoParcelas');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('numeroVezes');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valorSemJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valorentradaobrigatoria');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('diferencaUltimaParcelaSemJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('percentualJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('contemJuros');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('possuiSeguroPrestamista');
        expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('idjurofinanceirogrupo');
      });
  });
});