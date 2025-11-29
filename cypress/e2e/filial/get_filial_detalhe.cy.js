const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Filial/v2_filial_detalhe';
const Authorization = Cypress.env('API.PRAGMA');

const filialValida = 10050; 
const filialSemDados = 99999;

describe('API rest - Filial - GET /v3/filial_detalhe/{filial}', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${filialValida}`,
      headers: { Authorization }
    }).then((response) => {
      expect(response.status).to.equal(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('id_filial');
      expect(ret).to.have.property('id_empresa');
      expect(ret).to.have.property('numero_filial');
      expect(ret).to.have.property('nome_fantasia');
      expect(ret).to.have.property('razao_social');
      expect(ret).to.have.property('cnpj');
      expect(ret).to.have.property('cce');
      expect(ret).to.have.property('tipo_contribuinte');
      expect(ret).to.have.property('inscricao_municipal');
      expect(ret).to.have.property('inscricao_suframa');
      expect(ret).to.have.property('endereco');
      expect(ret).to.have.property('numero');
      expect(ret).to.have.property('bairro');
      expect(ret).to.have.property('complemento');
      expect(ret).to.have.property('id_cidade');
      expect(ret).to.have.property('cidade');
      expect(ret).to.have.property('uf');
      expect(ret).to.have.property('cep');
      expect(ret).to.have.property('caixa_postal');
      expect(ret).to.have.property('id_gruporota');
      expect(ret).to.have.property('id_rotacidade');
      expect(ret).to.have.property('id_ibge');
      expect(ret.inscsubstitutotributario[0]).to.have.property('uf');
      expect(ret.inscsubstitutotributario[0]).to.have.property('inscricao_substitutotributario');
      expect(ret.inscsubstitutotributario[0]).to.have.property('exclusivodifal');
    });
  });

  it('Deve retornar 204 quando não houver dados para a filial informada', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${filialSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para filial inválida', () => {
    const filialInvalida = "abc";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${filialInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(412);
      expect(response.body).to.exist;
    });
  });
});