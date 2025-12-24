const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idFilialInvalido = "abc";
const idFilialSemParametro = "99999";

describe('API rest - Financeiro - GET /Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilial}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('percentualMaximo');
    });
  });

  it('Status Code is 204', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilialSemParametro}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilialInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});