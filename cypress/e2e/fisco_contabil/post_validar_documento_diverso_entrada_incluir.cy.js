const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST /Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,  
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
      expect(ret).to.have.property('Numero_Lancamento_Conta_Corrrente');
      expect(ret).to.have.property('Erros');
    });
  });
});