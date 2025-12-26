const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_regra_fiscal_cfop_put';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - PUT /Fisco/Contabil/v3_regra_fiscal_cfop_put', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'PUT',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "CFOP": "string",
        "Descricao_CFOP": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalCFOP');
      expect(ret).to.have.property('Erros');
    });
  });
});