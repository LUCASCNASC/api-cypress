const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_agencia2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - PUT /Financeiro/v3_financeiro_agencia2', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 201', () => {
    cy.api({({
      method: 'PUT',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 999,
        nome: "Nova Agência",
        endereco: "Rua Nova, 100"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigoBanco');
      expect(ret).to.have.property('codigoAgencia');
    });
  });

  it('Status Code is 500', () => {
    cy.api({({
      method: 'PUT',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: null,
        codigoAgencia: null,
        nome: null,
        endereco: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});