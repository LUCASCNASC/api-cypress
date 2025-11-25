const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria_delete';
const Authorization = Cypress.env('API.PRAGMA');

const cnpjCpfValido = "123123123";
const idReferenciaBancariaValido = "123123123"; 
const cnpjCpfInvalido = "00000000000000";
const idReferenciaBancariaInvalido = "999999";

describe('API - Financeiro - DELETE /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', { env: { hideCredentials: true } }, () => {

  it('Status Code 200 ao excluir referência bancária', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${cnpjCpfValido}/${idReferenciaBancariaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir referência inexistente ou inválida', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${cnpjCpfInvalido}/${idReferenciaBancariaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});