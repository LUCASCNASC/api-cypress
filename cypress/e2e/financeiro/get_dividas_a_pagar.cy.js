const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_dividas_pagar';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialValido = "123123123"; 
const cpf_cnpjValido = "123123123";
const idFilialInvalido = "abc";
const cpf_cnpjInvalido = "xyz";
const idFilialSemTitulos = "99999";
const cpf_cnpjSemTitulos = "00000000000000";

describe('API rest - Financeiro - GET /Financeiro/v3_financeiro_dividas_pagar', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilialValido}/${cpf_cnpjValido}`,
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

  it('Status Code is 204', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilialSemTitulos}/${cpf_cnpjSemTitulos}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${idFilialInvalido}/${cpf_cnpjInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});