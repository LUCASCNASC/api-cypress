const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_get_delete_delete';
const Authorization = Cypress.env('API.PRAGMA');
const clienteValido = "12345678901234"; 

describe('API - Cliente - DELETE /v3/cliente/{cliente}', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 ao excluir cliente válido', () => {
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
    const clienteSemDados = "00000000000000";

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
    const clienteInvalido = "cliente_invalido";

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