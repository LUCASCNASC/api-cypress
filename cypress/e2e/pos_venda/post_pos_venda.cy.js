const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pós-venda/v3_pos_venda_get_post2';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pós-venda - POST - /v3/pos_venda', { env: { hideCredendials: true } }, () => {

  it('Resposta 200', () => {

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