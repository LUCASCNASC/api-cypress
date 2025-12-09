const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_rota_cidade';
const Authorization = Cypress.env('API.PRAGMA');

const idgruporotaInvalido = "abc";
const idgruporotaSemRota = "9999";
const idrotaSemRota = "9999";
const idrotacidadeSemRota = "9999";
const idgruporota = "123";
const idrota = "123";
const idrotacidade = "123";

describe('API rest - Diversos - GET /v3/rota_cidade', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idgruporota}/${idrota}/${idrotacidade}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgruporota');
      expect(ret).to.have.property('idrota');
      expect(ret).to.have.property('idrotacidade');
      expect(ret).to.have.property('bairro');
      expect(ret.cidade[0]).to.have.property('codigo');
      expect(ret.cidade[0]).to.have.property('descricao');
    });
  });

  it('Status Code 204', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idgruporotaSemRota}/${idrotaSemRota}/${idrotacidadeSemRota}`,
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
      url: `${BASE_URL}/${PATH_API}/${idgruporotaInvalido}/${idrota}/${idrotacidade}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});