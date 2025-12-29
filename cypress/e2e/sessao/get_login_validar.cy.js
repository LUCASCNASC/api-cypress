const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Sessão/v3_sessao_login_validar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Sessão - GET - /Sessão/v3_sessao_login_validar', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    const requestBody = {}

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/`,
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