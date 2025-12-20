const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Sessão/v2_sessao_login';
const Authorization = Cypress.env('API.PRAGMA');

const usuario = "12345678910"; 
const senha = "12345678910";
const codigoverificacao = "12345678910"; 

describe('API rest - Sessão - GET - /Sessão/v2_sessao_login', { env: { hideCredendials: true } }, () => {

  it('Status Code is 204', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${usuario}/${senha}/${codigoverificacao}`, 
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