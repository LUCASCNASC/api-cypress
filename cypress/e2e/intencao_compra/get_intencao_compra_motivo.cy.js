const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Intenção%20compra/v2_intencao_compra_motivo';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Intenção compra - GET /Intenção%20compra/v2_intencao_compra_motivo', { env: { hideCredendials: true } }, () => {
  
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
        expect(resposta.body.retorno[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});