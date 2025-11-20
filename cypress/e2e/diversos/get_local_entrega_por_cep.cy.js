const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_local_entrega_por_cep';
const Authorization = Cypress.env('API.PRAGMA');

const cepInvalido = "abcde";
const cepSemDados = "00000000";
const cepValido = "12123123";

describe('API - Diversos - GET /v3/local_entrega_por_cep', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades do local de entrega por CEP', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${cepValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgruporota');
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('descricaorota');
      expect(ret).to.have.property('codigo');
      expect(ret).to.have.property('descricaoentrega');
      expect(ret.cidade[0]).to.have.property('cidade_codigo');
      expect(ret.cidade[0]).to.have.property('cidade_nome');
      expect(ret.estado[0]).to.have.property('uf_codigo');
      expect(ret.estado[0]).to.have.property('uf_nome');
    });
  });

  it('Deve retornar 204 quando não houver locais de entrega para o CEP informado', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${cepSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para CEP inválido', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${cepInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});