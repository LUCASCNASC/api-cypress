const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cidade';
const Authorization = Cypress.env('API.PRAGMA');

const ufSemCidades = "ZZ";
const ufInvalido = "123";
const ufValido = "123";

describe('API rest - Diversos - GET /v3/cidade', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${ufValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cidade_codigo');
      expect(ret).to.have.property('cidade_nome');
    });
  });

  it('Status Code 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${ufSemCidades}`,
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
      url: `${BASE_URL}${PATH_API}/${ufInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});