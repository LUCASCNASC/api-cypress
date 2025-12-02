const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sistema/v2_sistema_key_value';
const Authorization = Cypress.env('API.PRAGMA');

const key = "12345678910";

describe('API rest - Sistema - GET - /v3/key_value/{key}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${key}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('chave');
        expect(resposta.body.retorno[0]).toHaveProperty('valor');
      });
  });
});