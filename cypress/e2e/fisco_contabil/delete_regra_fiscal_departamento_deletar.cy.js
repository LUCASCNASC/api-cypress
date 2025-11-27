const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_departamento_delete';
const Authorization = Cypress.env('API.PRAGMA');

const idBaseFiscalDepartamento = "123123123";

describe('API rest - Fisco/Contábil - DELETE - /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento}', { env: { hideCredendials: true } }, () => {

  it('Status Code 200 e as propriedades da base fiscal de departamento excluída', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idBaseFiscalDepartamento}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalDepartamento');
      expect(ret).to.have.property('Erros');
    });
  });
});