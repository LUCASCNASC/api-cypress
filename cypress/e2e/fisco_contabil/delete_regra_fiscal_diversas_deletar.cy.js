const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_diversas_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas}', { env: { hideCredendials: true } }, () => {
  
  const idBaseFiscalDiversas = "123123123";

  it('Deve retornar 200 e as propriedades da base fiscal diversas excluída', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idBaseFiscalDiversas}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalDiversas');
      expect(ret).to.have.property('Erros');
    });
  });
});