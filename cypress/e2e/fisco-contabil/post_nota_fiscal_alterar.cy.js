const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_post_nota_fiscal_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST /Fisco/Contabil/v3_post_nota_fiscal_alterar', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Fiscal": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});