const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - PUT /v3/banco', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 201', () => {
    
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigo: 123,
        nome: "Banco Atualizado"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigo');
    });
  });

  it('Status Code 500', () => {
    
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigo: null,
        nome: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});