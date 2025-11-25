const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_documento_diverso_entrada_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_incluir/', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200 e as propriedades do documento diverso de entrada incluído', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Diverso": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const retorno = response.body.retorno[0];
      expect(retorno).to.have.property('Status_Retorno');
      expect(retorno).to.have.property('CNPJ_Filial');
      expect(retorno).to.have.property('Numero_Documento_Diverso');
      expect(retorno).to.have.property('Numero_Registro_Nota');
      expect(retorno).to.have.property('Numero_Titulo');
      expect(retorno).to.have.property('Numero_Lancamento_Conta_Corrrente');
      expect(retorno.Erros[0]).to.have.property('CFOP ');
    });
  });
});