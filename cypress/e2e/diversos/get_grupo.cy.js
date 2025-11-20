const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_grupo';
const Authorization = Cypress.env('API.PRAGMA');

const idtipogrupoInvalido = "abc";
const idtipogrupoSemGrupo = "9999";
const idtipogrupoValido = "123"; 

describe('API - Diversos - GET /v3/grupo', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades do grupo', () => {
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

  it('Deve retornar 204 quando não houver grupos para o tipo informado', () => {

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

  it('Deve retornar 412 para idtipogrupo inválido', () => {

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