const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_baixa_titulo_pagar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/baixa_titulo_pagar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200 ao baixar títulos a pagar', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 123,
        valor: 100.00,
        dataPagamento: "2025-09-22"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar baixar título a pagar com payload inválido', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null,
        valor: null,
        dataPagamento: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});