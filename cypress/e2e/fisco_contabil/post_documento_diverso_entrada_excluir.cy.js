const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_documento_diverso_entrada_excluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_excluir/', { env: { hideCredendials: true } }, () => {
  
  it('Deve retornar 200 ao excluir documento diverso de entrada', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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