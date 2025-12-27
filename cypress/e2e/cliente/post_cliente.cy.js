const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Cliente/v3_cliente_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Cliente - POST /Cliente/v3_cliente_post', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200 ou 201', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "Cliente Teste",
        cnpj_cpf: "12345678901"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "",
        cnpj_cpf: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});