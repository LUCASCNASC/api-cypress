const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/api/version';
const AUTHORIZATION = Cypress.env('API.PRAGMA');

describe('API rest - GET /api/version', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization: AUTHORIZATION },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status deve ser 200').to.eq(200);
      expect(response.duration, 'Tempo de resposta deve ser inferior a 2000ms').to.be.lessThan(2000);
      expect(response.body, 'Body deve conter a propriedade retorno').to.have.property('retorno');
      expect(response.body.retorno, 'Retorno deve ser array não vazio').to.be.an('array').and.not.be.empty;

      const versao = response.body.retorno[0];
      expect(versao).to.include.all.keys('versaoREST', 'versaoBanco');
      expect(versao.versaoREST).to.be.a('string');
      expect(versao.versaoBanco).to.be.a('string');
    });
  });

  it('Status Code 401 e 403', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      failOnStatusCode: false
    }).should((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });
});