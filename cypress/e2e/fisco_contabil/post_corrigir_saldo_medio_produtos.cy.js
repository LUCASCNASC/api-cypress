const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_regra_fiscal_uf_get';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST - /Fisco/Contabil/v3_regra_fiscal_uf_get', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Produto": "string",
        "Data_Inicial": "2024-01-01",
        "Data_Final": "2024-01-31"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Id_Empresa');
      expect(ret).to.have.property('Id_Filial_Matriz');
      expect(ret).to.have.property('Id_Processamento');
    });
  });
});