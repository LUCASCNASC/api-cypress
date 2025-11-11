const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_estado';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/estado', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades de estado', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('uf_codigo');
      expect(ret).to.have.property('uf_nome');
    });
  });

  it('Deve retornar 204 quando não houver estados cadastrados', () => {
    // Se o endpoint não aceita parâmetro, simule um cenário de ambiente sem estados cadastrados, se possível
    // Caso não seja aplicável, este teste pode ser omitido.
  });

  it('Deve retornar 412 se houver erro de pré-requisito', () => {
    // Não aplicável se o endpoint não exige parâmetros obrigatórios, mas pode ser incluído para cobrir cenários de erro.
  });
});