const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pós-venda/v2_pos_venda_qualificacao';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pós-venda - GET - /Pós-venda/v2_pos_venda_qualificacao', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idqualificacao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});