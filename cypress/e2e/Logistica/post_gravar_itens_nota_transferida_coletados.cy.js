const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_post_gravar_itens_nota_transferida_coletados';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Logística - POST - /Logística/v3_post_gravar_itens_nota_transferida_coletados', { env: { hideCredendials: true } }, () => {
  
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