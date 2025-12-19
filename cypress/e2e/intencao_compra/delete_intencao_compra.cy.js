const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Intenção%20compra/v2_intencao_compra_delete';
const Authorization = Cypress.env('API.PRAGMA');

const codigo = "123123123";

describe('API rest - Intenção compra - DELETE /Intenção%20compra/v2_intencao_compra_delete', { env: { hideCredendials: true } } , () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE', 
      url: `${BASE_URL}/${PATH_API}/${codigo}`, 
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