const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sistema/v2_sistema_evento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Sistema - POST - /v3/evento', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 201', () => {

    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(201);
        expect(response.duration).to.be.below(2000);
      });
  });
});