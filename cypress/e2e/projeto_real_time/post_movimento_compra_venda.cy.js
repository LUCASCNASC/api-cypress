const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Projeto%20Real%20Time/v3_post_movimento_compra_venda';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Projeto Real Time - POST - /Projeto%20Real%20Time/v3_post_movimento_compra_venda', () => {
  
  it('Status Code is 200', { env: { hideCredendials: true } }, () => {
    cy.api({({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('cnpj');
        expect(resposta.body.retorno[0]).toHaveProperty('data_inicial');
        expect(resposta.body.retorno[0]).toHaveProperty('data_final');
        expect(resposta.body.retorno[0]).toHaveProperty('hora_inicial');
        expect(resposta.body.retorno[0]).toHaveProperty('hora_final');
      });
  });
});