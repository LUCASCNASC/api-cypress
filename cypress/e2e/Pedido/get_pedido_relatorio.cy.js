const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v2_pedido_relatorio';
const Authorization = Cypress.env('API.PRAGMA');

const codigo = "12345678910";

describe('API rest - Pedido - GET - /v3/pedido_relatorio/{codigo}', { env: { hideCredendials: true } }, () => {

  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${codigo}`, 
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