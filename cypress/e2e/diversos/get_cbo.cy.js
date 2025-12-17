const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cbo';
const Authorization = Cypress.env('API.PRAGMA');

const termoSemDados = "xxxxxx";
const termoInvalido = "!!@@##";
const termoValido = "123";
const limit = "123"; 
const offset = "123";
const sort = "123";

describe('API rest - Diversos - GET /Diversos/v2_diversos_cbo', { env: { hideCredentials: true } }, () => {

  it('Status Code: 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoValido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idcbo');
      expect(ret.data[0]).to.have.property('idcbofamilia');
      expect(ret.data[0]).to.have.property('descricao');
    });
  });

  it('Status Code: 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoSemDados}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code: 412', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoInvalido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});