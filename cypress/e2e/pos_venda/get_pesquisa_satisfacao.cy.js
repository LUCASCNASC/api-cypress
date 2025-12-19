const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pós-venda/v3_pesquisa_satisfacao';
const Authorization = Cypress.env('API.PRAGMA');

const idfilial = "12345678910";

describe('API rest - Pós-venda - GET - /Pós-venda/v3_pesquisa_satisfacao', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${idfilial}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })  
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('idpesquisasatisfacao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});