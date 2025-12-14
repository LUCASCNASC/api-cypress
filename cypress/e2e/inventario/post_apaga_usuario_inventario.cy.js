const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Inventário/v3_post_apaga_usuario_inventario';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Inventário - POST - /v3/apaga_usuario_inventario/{idFilial}/{idInventario}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
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