const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_post_nota_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST /Fisco/Contabil/v3_post_nota_incluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
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
      expect(ret).to.have.property('CNPJ_Filial_Nota');
      expect(ret).to.have.property('CNPJ_CPF_Nota');
      expect(ret).to.have.property('Data_Movimento');
      expect(ret).to.have.property('Numero_Nota');
      expect(ret).to.have.property('Id_Registro_Nota');
      expect(ret).to.have.property('Id_Titulo');
      expect(ret).to.have.property('Erros');
    });
  });
});