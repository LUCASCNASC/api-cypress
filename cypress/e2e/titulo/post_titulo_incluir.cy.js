const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Titulo/v3_post_titulo_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Titulo - POST - /Titulo/v3_post_titulo_incluir', { env: { hideCredendials: true } }, () => {
  
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