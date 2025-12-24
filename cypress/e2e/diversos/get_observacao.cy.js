const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Diversos/v3_diversos_observacao';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Diversos - GET /Diversos/v3_diversos_observacao', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idobservacao');
      expect(ret).to.have.property('descricao');
    });
  });
});