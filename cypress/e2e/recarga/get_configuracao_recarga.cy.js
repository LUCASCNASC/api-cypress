const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Recarga/v3_configuracao_recarga';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Recarga - GET - /Recarga/v3_configuracao_recarga', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idServico');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('idProcesso');
        expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricaoAbreviada');
        expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('tipo');
      });
  });
});