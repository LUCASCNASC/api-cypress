const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/api/API/api_swagger';
const AUTHORIZATION = Cypress.env('API.PRAGMA');

const VERSAO = Cypress.env('VERSAO');

describe('API - Swagger JSON - GET /api/swagger', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e JSON válido do Swagger', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${VERSAO}`,
      headers: { Authorization: AUTHORIZATION },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status deve ser 200').to.eq(200);
      expect(response.duration, 'Tempo de resposta deve ser inferior a 2000ms').to.be.lessThan(2000);
      expect(response.body, 'Body deve ser um objeto').to.be.an('object');
      expect(response.body).to.have.all.keys('swagger', 'info', 'paths');
    });
  });

  it('Deve retornar erro de autorização se header estiver ausente - 401 e 403', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${VERSAO}`,
      failOnStatusCode: false
    }).should((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });
});