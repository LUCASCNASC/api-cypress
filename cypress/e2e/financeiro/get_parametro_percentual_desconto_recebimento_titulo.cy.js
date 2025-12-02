const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idFilialInvalido = "abc";
const idFilialSemParametro = "99999";

describe('API rest - Financeiro - GET /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilial}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('percentualMaximo');
    });
  });

  it('Deve retornar 204 quando não houver parâmetro para o idFilial informado', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialSemParametro}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para idFilial inválido', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});