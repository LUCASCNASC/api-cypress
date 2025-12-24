const API_BASE_URLURL = Cypress.env('BASE_URL');
const PATH = '/Trial/v3_post_gerador_trial';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Trial - POST - /Trial/v3_post_gerador_trial', { env: { hideCredendials: true } }, () => {
  
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