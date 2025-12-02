const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pós-venda/v2_pos_venda_qualificacao';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Pós-venda - GET - /v3/pos_venda_qualificacao', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: '`${BASE_URL}/Pedido/v2_pedido_get_delete2/${codigo}/${idfilial}`', 
      url: `${BASE_URL}/${PATH_API}`, 
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