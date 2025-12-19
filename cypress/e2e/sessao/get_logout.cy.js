const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sessão/v2_sessao_logout';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Sessão - GET - /Sessão/v2_sessao_logout', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 204', () => {
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