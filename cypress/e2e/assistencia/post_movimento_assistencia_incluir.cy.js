const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Assistencia/v3_post_movimento_assistencia_incluir';
const AUTHORIZATION = Cypress.env('API.PRAGMA');

const AUTHORIZATION_INVALID = Cypress.env('API.PRAGMA_INVALID');

describe('API rest - Assistência - POST /Assistencia/v3_post_movimento_assistencia_incluir', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url,
      headers: { Authorization: AUTHORIZATION },
      failOnStatusCode: false,
      body: {
        Empresa: "empresaExemplo",
        Filial: "filialExemplo",
        ID_Registro_Nota: 123,
        Qtde_Assistencias: 1
      }
    }).should((response) => {
      expect(response.status, 'Status code: 200').to.eq(200);
      expect(response.duration, 'Deve responder em menos de 2s').to.be.lessThan(2000);
      expect(response.body, 'Deve conter propriedade retorno').to.have.property('retorno');
      expect(response.body.retorno, 'Retorno deve ser array não vazio').to.be.an('array').and.not.be.empty;

      const item = response.body.retorno[0];
      expect(item).to.include.all.keys('Empresa', 'Filial', 'ID_Registro_Nota', 'Qtde_Assistencias', 'Erros');
      expect(item.Empresa).to.be.a('string');
      expect(item.Filial).to.be.a('string');
      expect(item.ID_Registro_Nota).to.be.a('number');
      expect(item.Qtde_Assistencias).to.be.a('number');
      expect(item.Erros).to.be.an('array');
    });
  });

  it('Status Code is 402', () => {
    cy.api({({
      method: 'POST',
      url,
      headers: { Authorization: AUTHORIZATION },
      failOnStatusCode: false,
      body: {
        Empresa: "",
        Filial: null
      }
    }).should((response) => {
      expect(response.status, 'Status deve ser 412').to.eq(412);
      expect(response.body).to.have.property('erro');
    });
  });

  it('Status Code is 401 e 403', () => {
    cy.api({({
      method: 'POST',
      url,
      headers: { Authorization: AUTHORIZATION_INVALID },
      failOnStatusCode: false,
      body: {
        Empresa: "empresaExemplo",
        Filial: "filialExemplo",
        ID_Registro_Nota: 123,
        Qtde_Assistencias: 1
      }
    }).should((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });

  it('Status Code is 401 e 403', () => {
    cy.api({({
      method: 'POST',
      url,
      failOnStatusCode: false,
      body: {
        Empresa: "empresaExemplo",
        Filial: "filialExemplo",
        ID_Registro_Nota: 123,
        Qtde_Assistencias: 1
      }
    }).should((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });
});