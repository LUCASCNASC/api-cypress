const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/api/session';
const AUTHORIZATION = Cypress.env('API.PRAGMA');

describe('API - Sessões Ativas - GET /api/session', { env: { hideCredendials: true } }, () => {

  const AUTHORIZATION_INVALID = Cypress.env('API.PRAGMA_INVALID');
  
  it('Deve retornar 200, array de sessões não vazio e propriedades obrigatórias', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization: AUTHORIZATION },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status deve ser 200').to.eq(200);
      expect(response.duration, 'Tempo de resposta deve ser inferior a 2000ms').to.be.lessThan(2000);

      expect(response.body, 'Body deve conter a propriedade retorno').to.have.property('retorno');
      expect(response.body.retorno, 'Retorno deve ser array não vazio').to.be.an('array').and.not.be.empty;

      // Validação detalhada de cada sessão retornada
      response.body.retorno.forEach(sessao => {
        expect(sessao).to.include.all.keys('sessao', 'tempo', 'expiraEm');
        expect(sessao.sessao).to.be.a('string');
        expect(sessao.tempo).to.be.a('number');
        expect(sessao.expiraEm).to.satisfy(val => typeof val === 'string' || typeof val === 'number');
      });
    });
  });

  it('Deve retornar erro de autorização com token inválido - 401 e 403', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization: AUTHORIZATION_INVALID },
      failOnStatusCode: false
    }).should((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });
});