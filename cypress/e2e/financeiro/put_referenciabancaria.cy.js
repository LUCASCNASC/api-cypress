const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - PUT /v3/referenciabancaria', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 201 e as propriedades da referência bancária alterada', () => {

    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idCnpjCpf: "12345678901",
        idReferenciaBancaria: 1,
        banco: "123",
        agencia: "999",
        conta: "99999-9"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idCnpjCpf');
      expect(ret).to.have.property('idReferenciaBancaria');
    });
  });

  it('Deve retornar 500 ao tentar alterar referência bancária com payload inválido', () => {

    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idCnpjCpf: "",
        idReferenciaBancaria: 1,
        banco: "123",
        agencia: "999",
        conta: "99999-9"
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});