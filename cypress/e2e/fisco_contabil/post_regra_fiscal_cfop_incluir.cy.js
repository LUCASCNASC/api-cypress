const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_cfop_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/regra_fiscal_cfop_incluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200 e as propriedades da base fiscal CFOP incluída', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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