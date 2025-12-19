const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Intenção%20compra/v2_intencao_compra_get_post1';
const Authorization = Cypress.env('API.PRAGMA');

const situacao = "123123123";

describe('API rest - Intenção compra - GET /Intenção%20compra/v2_intencao_compra_get_post1', { env: { hideCredendials: true } }, () => {

  it('GET - /v3/intencao_compra - Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${situacao}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('idintencaocompra');
        expect(resposta.body.retorno[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0]).toHaveProperty('nomecliente');
        expect(resposta.body.retorno[0]).toHaveProperty('dtregistrado');
      });
  });
});