const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_bloquetos_por_titulo';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/bloquetos_por_titulo', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200 ao imprimir meio de cobrança em PDF', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 321,
        tipoDocumento: "PDF"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar imprimir meio de cobrança com payload inválido', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null,
        tipoDocumento: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});