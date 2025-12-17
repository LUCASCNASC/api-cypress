const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_estado';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Diversos - GET /Diversos/v2_diversos_estado', { env: { hideCredentials: true } }, () => {
  
  it('Status Code: 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('uf_codigo');
      expect(ret).to.have.property('uf_nome');
    });
  });
});