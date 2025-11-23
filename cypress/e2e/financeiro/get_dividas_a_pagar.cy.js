const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_dividas_pagar';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialValido = "123123123"; 
const cpf_cnpjValido = "123123123";
const idFilialInvalido = "abc";
const cpf_cnpjInvalido = "xyz";
const idFilialSemTitulos = "99999";
const cpf_cnpjSemTitulos = "00000000000000";

describe('API - Financeiro - GET /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades dos títulos a pagar', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialValido}/${cpf_cnpjValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('valor');
    });
  });

  it('Deve retornar 204 quando não houver títulos a pagar', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialSemTitulos}/${cpf_cnpjSemTitulos}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialInvalido}/${cpf_cnpjInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});