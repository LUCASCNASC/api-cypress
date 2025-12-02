const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia1';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/agencia', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 201', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 100,
        nome: "Agência Central",
        endereco: "Rua Exemplo, 123"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 500 ao tentar incluir agência com payload inválido', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
        codigoBanco: null,
        codigoAgencia: null,
        nome: "",
        endereco: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});