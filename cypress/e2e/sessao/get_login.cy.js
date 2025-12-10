const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sessão/v2_sessao_login';
const Authorization = Cypress.env('API.PRAGMA');

const usuario = "12345678910"; 
const senha = "12345678910";
const codigoverificacao = "12345678910"; 

describe('API rest - Sessão - GET - /v3/login/{usuario}/{senha}', { env: { hideCredendials: true } }, () => {

  it('Status Code 204', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${usuario}/${senha}/${codigoverificacao}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(204);
        expect(response.duration).to.be.below(2000);
      });
  });
});