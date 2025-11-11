const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Filial/v3_get_filial_por_tipo';
const Authorization = Cypress.env('API.PRAGMA');
const ufValida = 'PR';
const municipioValido = 3317;
const tipoValido = 1;

describe('API - Filial - GET /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades da lista de filial por tipo', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${ufValida}/${municipioValido}/${tipoValido}`,
      headers: { Authorization }
    }).then((response) => {
      expect(response.status).to.equal(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idtipofilial');
      expect(ret).to.have.property('descricao_tipofilial');
      expect(ret).to.have.property('nome_filial');
      expect(ret).to.have.property('logradouro');
      expect(ret).to.have.property('numero');
      expect(ret).to.have.property('complemento');
      expect(ret).to.have.property('bairro');
      expect(ret).to.have.property('idcidade');
      expect(ret).to.have.property('cidade');
      expect(ret).to.have.property('telefone');
      expect(ret).to.have.property('cep');
      expect(ret).to.have.property('uf');
    });
  });

  it('Deve retornar 204 quando não houver filiais para os parâmetros informados', () => {
    const ufSemFilial = 'ZZ';
    const municipioSemFilial = 99999;
    const tipoSemFilial = 9;

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${ufSemFilial}/${municipioSemFilial}/${tipoSemFilial}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    const ufInvalida = "1";
    const municipioInvalido = "abc";
    const tipoInvalido = "xyz";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${ufInvalida}/${municipioInvalido}/${tipoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(412);
      expect(response.body).to.exist;
    });
  });
});