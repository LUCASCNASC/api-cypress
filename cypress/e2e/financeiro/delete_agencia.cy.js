const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia_delete';
const Authorization = Cypress.env('API.PRAGMA');
const codigoBancoValido = "123123123";
const codigoAgenciaValido = "123456";

describe('API - Financeiro - DELETE /v3/agencia/{codigoBanco}/{codigoAgencia}', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 ao excluir agência', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoValido}/${codigoAgenciaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar erro ao tentar excluir agência inexistente ou inválida', () => {
    const codigoBancoInvalido = "99999";
    const codigoAgenciaInvalida = "99999";
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${codigoBancoInvalido}/${codigoAgenciaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 412]).to.include(response.status);
    });
  });
});