const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/LGPD/v3_post_lgpd_dados_titular_excluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - LGPD - POST /LGPD/v3_post_lgpd_dados_titular_excluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
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