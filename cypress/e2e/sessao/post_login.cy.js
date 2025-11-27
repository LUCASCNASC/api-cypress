const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sessão/v3_sessao_login_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Sessão - POST - /v3/login', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 204', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(204);
        expect(response.duration).to.be.below(2000);
      });
  });
});