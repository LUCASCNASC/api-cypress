const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Produto/v3_produto_saldo_disponivel';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Produto - POST - /Produto/v3_produto_saldo_disponivel', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
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
      });
  });
});