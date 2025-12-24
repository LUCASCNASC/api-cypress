const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Sistema/v2_sistema_evento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Sistema - POST - /Sistema/v2_sistema_evento', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 201', () => {

    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
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