const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Intenção%20compra/v2_intencao_compra_detalhe';
const Authorization = Cypress.env('API.PRAGMA');

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', { env: { hideCredendials: true } }, () => {
  
  const codigo = "123123123";
  const cliente = "123123123";
  const situacao = "123123123";

    it('Resposta 200', () => {
      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${codigo}/${cliente}/${situacao}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0]).toHaveProperty('telefonefixo');
          expect(resposta.body.retorno[0]).toHaveProperty('telefonecelular');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('departamento_codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('departamento_descricao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('marca_codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('marca_descricao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('ordem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('dtregistrado');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('motivo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('departamento_codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('departamento_descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('marca_codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('marca_descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('ordem');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorprodutointencao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('dtregistrado');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('motivo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('observacao')
        });
    });
  });