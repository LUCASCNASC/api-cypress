const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_observacao';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/observacao', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades de observação', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idobservacao');
      expect(ret).to.have.property('descricao');
    });
  });

  it('Deve retornar 204 quando não houver observações cadastradas', () => {
    // Se não for possível simular ambiente vazio, pode ser omitido.
  });
});