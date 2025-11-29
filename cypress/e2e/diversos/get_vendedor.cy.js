const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_vendedor';
const Authorization = Cypress.env('API.PRAGMA');

const termoValido = "123";
const limit = "123";
const offset = "123";
const sort = "123";

describe('API rest - Diversos - GET /v3/vendedor', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${termoValido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idvendedor');
      expect(ret.data[0]).to.have.property('nome');
    });
  });

  it('Deve retornar 412 para termo inválido', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${termoInvalido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});