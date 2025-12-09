const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_local_entrega_por_cep';
const Authorization = Cypress.env('API.PRAGMA');

const cepInvalido = "abcde";
const cepSemDados = "00000000";
const cepValido = "12123123";

describe('API rest - Diversos - GET /v3/local_entrega_por_cep', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    
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

  it('Status Code 204', () => {
    
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

  it('Status Code 412', () => {
    
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