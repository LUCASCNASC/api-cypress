const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sessão/v3_post_redefinir_senha';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Sessão - POST - /v3/redefinir_senha', { env: { hideCredendials: true } }, () => {
  
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