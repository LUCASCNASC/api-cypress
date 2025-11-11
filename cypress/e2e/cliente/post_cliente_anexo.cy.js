const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_anexo_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Cliente - POST /v3/cliente_anexo', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 ou 201 ao incluir anexo válido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idcnpj_cpf: "12345678901",
        descricao: "Anexo teste",
        arquivo: "base64string"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar incluir anexo com dados inválidos', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idcnpj_cpf: "",
        descricao: "",
        arquivo: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});