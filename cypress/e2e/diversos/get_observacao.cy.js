const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_observacao';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Diversos - GET /v3/observacao', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}`,
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