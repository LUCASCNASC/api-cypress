const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_post_documento_diverso_entrada_excluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST - /Fisco/Contabil/v3_post_documento_diverso_entrada_excluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Diverso": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});