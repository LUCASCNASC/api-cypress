const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Recarga/v3_get_recarga';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910"; 
const idItemServico = "12345678910";

describe('Recarga - GET - /v3/recarga/{idFilial}/{idItemServico}', { env: { hideCredendials: true } }, () => { 
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idItemServico}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('cnpjCpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeCliente');
          expect(resposta.body.retorno[0]).toHaveProperty('idOperadoraTelefone');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroTelefone');
          expect(resposta.body.retorno[0]).toHaveProperty('formaPagamento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('nsu');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('nsuHost');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('copiaRecibo');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('autorizacao');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('modalidade');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('instituicao');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('operadora');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('valor');
        });
    });
  });