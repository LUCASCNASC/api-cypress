const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_nota_fiscal_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST - /v3/nota_fiscal_alterar/', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200 ao alterar nota fiscal do tipo manual', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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