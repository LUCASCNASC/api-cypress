const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Diversos/v2_diversos_local_entrega';
const Authorization = Cypress.env('API.PRAGMA');

const rotaInvalida = "abc";
const rotaSemDados = "9999";
const rotaValida = "123";

describe('API rest - Diversos - GET /Diversos/v2_diversos_local_entrega', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${rotaValida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('descricao');
      expect(ret.local_entrega[0]).to.have.property('codigo');
      expect(ret.local_entrega[0]).to.have.property('descricao');
      expect(ret.local_entrega[0]).to.have.property('cep');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_nome');
      expect(ret.local_entrega[0].estado[0]).to.have.property('uf_codigo');
      expect(ret.local_entrega[0].estado[0]).to.have.property('uf_nome');
    });
  });

  it('Status Code is 204', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${rotaSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${rotaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});