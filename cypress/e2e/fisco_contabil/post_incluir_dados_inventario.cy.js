const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_inventario_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST /Fisco/Contabil/v3_post_inventario_incluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Data_Inventario": "2024-01-31",
        "Itens_Inventario": [
          {
            "Codigo_Produto": "string",
            "Descricao_Produto": "string",
            "Quantidade": 0,
            "Unidade": "string",
            "Valor_Unitario": 0,
            "Valor_Total": 0
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('CNPJ_Filial');
      expect(ret).to.have.property('Data_Inventario');
      expect(ret).to.have.property('Codigo_Inventario_PDA');
      expect(ret).to.have.property('Erros');
    });
  });
});