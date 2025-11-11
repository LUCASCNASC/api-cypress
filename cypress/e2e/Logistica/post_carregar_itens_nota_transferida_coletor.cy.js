const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_get_carregar_Itens_nota_transferida_coletor';
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialdestino');
          expect(resposta.body.retorno[0]).toHaveProperty('iditembaseorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('idregistronotaorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('codigobarra');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadeacoletar');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadecoletado');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaocoletanotatransferida');
          expect(resposta.body.retorno[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });