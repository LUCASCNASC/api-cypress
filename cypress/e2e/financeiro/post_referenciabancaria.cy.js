const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria1';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_financeiro_referencia_bancaria1', { env: { hideCredentials: true } }, () => {
  
  it('Status Code: 201', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idCnpjCpf: "12345678901",
        banco: "001",
        agencia: "1234",
        conta: "56789-0"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idCnpjCpf');
      expect(ret).to.have.property('idReferenciaBancaria');
    });
  });

  it('Status Code: 500', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idCnpjCpf: null,
        banco: null,
        agencia: null,
        conta: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});