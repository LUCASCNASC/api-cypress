const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Indicadores/v3_indicador_vendedor';
const Authorization = Cypress.env('API.PRAGMA');

const ano = "123123123";
const mes = "123123123"; 
const dia = "123123123";

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', { env: { hideCredendials: true } } , () => {

    it('Resposta 200', () => {
      
      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${ano}/${mes}/${dia}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('ordemexibicao');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoindicador');
          expect(resposta.body.retorno[0].dados[0]).toHaveProperty('valor');
        });
    });
  });