const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_conta_bancaria1';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/contabancaria', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 201 ao incluir conta bancária', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 1001,
        numeroConta: "123456-7",
        titular: "Empresa Teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 500 ao tentar incluir conta bancária com payload inválido', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: null,
        codigoAgencia: null,
        numeroConta: null,
        titular: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});