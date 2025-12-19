const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pós-venda/v3_pos_venda_get_post2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Pós-venda - POST - /Pós-venda/v3_pos_venda_get_post2', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
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