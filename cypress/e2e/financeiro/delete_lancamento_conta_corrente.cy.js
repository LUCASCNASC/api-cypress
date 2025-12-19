const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_lancamento_conta_corrente_delete';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialValido = "123123123";
const idLancamentoContaCorrenteValido = "123123123";
const idFilialInvalido = "99999";
  const idLancamentoContaCorrenteInvalido = "99999";

describe('API rest - Financeiro - DELETE /Financeiro/v3_financeiro_lancamento_conta_corrente_delete', { env: { hideCredentials: true } }, () => {

  it('Status Code is 201', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idFilialValido}/${idLancamentoContaCorrenteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 500', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idFilialInvalido}/${idLancamentoContaCorrenteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});