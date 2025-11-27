const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_get_delete_delete';
const Authorization = Cypress.env('API.PRAGMA');

const clienteSemDados = Cypress.env('00000000000000');
const clienteInvalido = Cypress.env('cliente_invalido');
const clienteValido = Cypress.env('12345678901234');

describe('API rest - Cliente - DELETE /v3/cliente/{cliente}', { env: { hideCredentials: true } }, () => {

  it('Status Code 200 ao excluir cliente válido', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${clienteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 204 ao excluir cliente já inexistente', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${clienteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para cliente inválido', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${clienteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});