const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Compras/v3_post_produto_incluir_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Compras - POST /Compras/v3_post_produto_incluir_alterar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CodigoProduto: "12345",
        NomeProduto: "Produto Teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CodigoProduto: "",
        NomeProduto: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});