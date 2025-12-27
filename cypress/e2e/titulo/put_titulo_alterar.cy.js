const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Titulo/v3_put_titulo_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Titulo - PUT - /Titulo/v3_put_titulo_alterar', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'PUT', 
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