const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cep';
const Authorization = Cypress.env('API.PRAGMA');
const cepValido = "12312312312";

describe('API - Diversos - GET /v3/cep/{cep}', { env: { hideCredentials: true } }, () => {
  

  it('Deve retornar 200 e as propriedades do CEP', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${cepValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('rua');
      expect(ret).to.have.property('bairro');
      expect(ret.estado[0]).to.have.property('uf_codigo');
      expect(ret.estado[0]).to.have.property('uf_nome');
      expect(ret.cidade[0]).to.have.property('cidade_codigo');
      expect(ret.cidade[0]).to.have.property('cidade_nome');
    });
  });

  it('Deve retornar 204 quando não houver dados para o CEP informado', () => {
    const cepSemDados = "00000000";

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
    const cepInvalido = "abcde";

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