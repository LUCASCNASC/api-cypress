const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Sistema/v2_sistema_key_value_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('Sistema - POST - /Sistema/v2_sistema_key_value_post', { env: { hideCredendials: true } } , () => {
  
  it('Status Code is 200', () => {
    cy.api({
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