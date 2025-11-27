const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pagamento%20divida/v2_divida_baixa_cliente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST - /v3/baixa_divida_cliente', { env: { hideCredendials: true } }, () => {

  it('Status Code 200', () => {

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