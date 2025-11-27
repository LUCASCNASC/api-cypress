const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_incluir_voucher_pagamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /v3/incluir_voucher_pagamento', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 201 e as propriedades do voucher de pagamento', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        chave: "ABC123",
        valor: 100.00
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idfilial');
      expect(ret).to.have.property('chave');
      expect(ret).to.have.property('cnpjcpf');
      expect(ret).to.have.property('valor');
    });
  });

  it('Deve retornar 412 ao tentar incluir voucher de pagamento com payload inválido', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        chave: null,
        valor: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});