const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v2_pedido_relatorio';
const Authorization = Cypress.env('API.PRAGMA');

const codigo = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v2_pedido_relatorio', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${codigo}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
        expect(resposta.body.retorno[0]).toHaveProperty('pdf');
        expect(resposta.body.retorno[0]).toHaveProperty('size');
      });
  });
});