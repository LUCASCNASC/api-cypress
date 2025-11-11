const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco3';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - GET /v3/banco', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades de banco', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idbanco');
      expect(ret).to.have.property('nome');
    });
  });

  it('Deve retornar 500 ao ocorrer erro interno', () => {
    // Simule uma situação de erro interno, se possível
    // Caso não seja possível simular, esse teste pode ser omitido.
  });
});