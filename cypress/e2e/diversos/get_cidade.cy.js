const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cidade';
const Authorization = Cypress.env('API.PRAGMA');
const ufValido = "123";

describe('API - Diversos - GET /v3/cidade', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades de cidade', () => {
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

  it('Deve retornar 204 quando não houver cidades para a UF informada', () => {
    const ufSemCidades = "ZZ"; // UF que não existe

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

  it('Deve retornar 412 para UF inválida', () => {
    const ufInvalido = "123";

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