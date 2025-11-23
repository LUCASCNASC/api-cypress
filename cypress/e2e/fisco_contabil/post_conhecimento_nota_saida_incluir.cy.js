const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_uf_get';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/conhecimento_nota_saida_incluir/', { env: { hideCredendials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades do conhecimento de nota de saída', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Diverso": "string",
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Status_Retorno');
      expect(ret).to.have.property('CNPJ_Filial');
      expect(ret).to.have.property('Numero_Documento_Diverso');
      expect(ret).to.have.property('Numero_Registro_Nota');
      expect(ret).to.have.property('Numero_Titulo');
      expect(ret.Erros[0]).to.have.property('CFOP ');
    });
  });
});