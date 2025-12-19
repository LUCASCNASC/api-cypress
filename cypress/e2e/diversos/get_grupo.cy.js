const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_grupo';
const Authorization = Cypress.env('API.PRAGMA');

const idtipogrupoInvalido = "abc";
const idtipogrupoSemGrupo = "9999";
const idtipogrupoValido = "123"; 

describe('API rest - Diversos - GET /Diversos/v3_diversos_grupo', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idtipogrupoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgrupo');
      expect(ret).to.have.property('idalias');
      expect(ret).to.have.property('descricao');
      expect(ret.tipogrupo[0]).to.have.property('codigo');
      expect(ret.tipogrupo[0]).to.have.property('descricao');
    });
  });

  it('Status Code is 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idtipogrupoSemGrupo}`,
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
      url: `${BASE_URL}${PATH_API}/${idtipogrupoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});