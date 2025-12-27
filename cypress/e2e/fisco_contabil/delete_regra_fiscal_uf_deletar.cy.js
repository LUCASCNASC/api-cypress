const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_regra_fiscal_uf_delete';
const Authorization = Cypress.env('API.PRAGMA');

const idBaseFiscalUF = "123123123"; 

describe('API rest - Fisco/Contábil - DELETE - /Fisco/Contabil/v3_regra_fiscal_uf_delete', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH}/${idBaseFiscalUF}`,
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