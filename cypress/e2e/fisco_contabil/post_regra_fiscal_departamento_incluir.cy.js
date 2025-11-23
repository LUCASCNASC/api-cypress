const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_departamento_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/regra_fiscal_departamento_incluir', { env: { hideCredendials: true } }, () => {
  
  it('POST - /v3/regra_fiscal_departamento_incluir - Resposta 200', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Departamento": "string",
        "Descricao_Departamento": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalDepartamento');
      expect(ret).to.have.property('Erros');
    });
  });
});