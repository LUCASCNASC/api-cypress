const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_local_entrega';
const Authorization = Cypress.env('API.PRAGMA');

const rotaInvalida = "abc";
const rotaSemDados = "9999";
const rotaValida = "123";

describe('API - Diversos - GET /v3/local_entrega', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades do local de entrega', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${rotaValida}`,
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

  it('Deve retornar 204 quando não houver locais de entrega para a rota informada', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${rotaSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para rota inválida', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${rotaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});