const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Inventário/v3_post_cancela_inventario';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idInventario = "123123123";

describe('API rest - Inventário - POST /Inventário/v3_post_cancela_inventario', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
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