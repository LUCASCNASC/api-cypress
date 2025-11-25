const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200 e as propriedades do manifesto de documento fiscal incluído', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Fiscal": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Id_Manifesto_Documento_Fiscal');
      expect(ret).to.have.property('Id_Filial');
      expect(ret).to.have.property('Erros');
    });
  });
});