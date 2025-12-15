const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_historicocontacorrente';
const Authorization = Cypress.env('API.PRAGMA');

const idTipoContaCorrente = "123123123";
const idContaCorrente = "123123123";
const idTipoContaCorrenteSemDados = "99999";
const idContaCorrenteSemDados = "99999";
const idTipoContaCorrenteInvalido = "abc";
const idContaCorrenteInvalido = "xyz";

describe('API rest - Financeiro - GET /Financeiro/v3_financeiro_historicocontacorrente', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idTipoContaCorrente}/${idContaCorrente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idHistoricoContaCorrente');
      expect(ret).to.have.property('descricao');
      expect(ret).to.have.property('idTipoHistorico');
      expect(ret).to.have.property('tipoHistorico');
    });
  });

  it('Status Code 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idTipoContaCorrenteSemDados}/${idContaCorrenteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code 412', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idTipoContaCorrenteInvalido}/${idContaCorrenteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});