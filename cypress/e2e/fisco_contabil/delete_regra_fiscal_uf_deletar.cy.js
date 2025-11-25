const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_uf_delete';
const Authorization = Cypress.env('API.PRAGMA');

const idBaseFiscalUF = "123123123"; 

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF}', { env: { hideCredendials: true } }, () => {

  it('Status Code 200 e as propriedades da base fiscal de UF excluída', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idBaseFiscalUF}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalUF');
      expect(ret).to.have.property('Erros');
    });
  });
});