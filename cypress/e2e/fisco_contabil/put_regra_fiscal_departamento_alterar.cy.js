const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_departamento_put';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - PUT - /v3/regra_fiscal_departamento_alterar', { env: { hideCredendials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades da base fiscal de departamento alterada', () => {
    
    cy.api({
      method: 'PUT',
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