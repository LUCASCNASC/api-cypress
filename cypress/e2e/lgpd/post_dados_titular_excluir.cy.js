const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/LGPD/v3_post_lgpd_dados_titular_excluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - LGPD - POST - /v3/dados_titular_excluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
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
      });
  });
});