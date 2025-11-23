const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_bloqueto';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/bloqueto', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 ao incluir meio de cobrança', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        cliente: "12345678901",
        valor: 150.00,
        vencimento: "2025-09-22"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('gerado');
      expect(ret).to.have.property('jaIncluso');
      expect(ret).to.have.property('quitado');
      expect(ret).to.have.property('processoNaoGera');
      expect(ret).to.have.property('clienteNaoGera');
    });
  });

  it('Deve retornar 412 ao tentar incluir meio de cobrança com payload inválido', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        cliente: null,
        valor: null,
        vencimento: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});