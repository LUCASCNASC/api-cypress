const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_lancamento_conta_corrente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_financeiro_lancamento_conta_corrente', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 201', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idFilial: 1,
        idContaCorrente: 1,
        idHistoricoContaCorrente: 1,
        valor: 500.00
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idLancamentoContaCorrente');
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idFilial: null,
        idContaCorrente: null,
        idHistoricoContaCorrente: null,
        valor: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});