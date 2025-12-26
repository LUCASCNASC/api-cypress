const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Cliente/v2_cliente_get_delete_get';
const Authorization = Cypress.env('API.PRAGMA');

const clienteSemDados = Cypress.env('00000000000000');
const clienteInvalido = Cypress.env('cliente_invalido');
const clienteValido = "12345678901234";

describe('API rest - Cliente - GET /Cliente/v2_cliente_get_delete_get', { env: { hideCredentials: true } }, () => {
   
  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);

      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('nomefantasia');
    });
  });

  it('Status Code is 204', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {
    cy.api({({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});