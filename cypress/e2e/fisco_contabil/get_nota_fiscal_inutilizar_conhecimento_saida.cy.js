const BASE_URL = Cypress.env('API_UBASE_URLRL');
const PATH_API = '/Fisco/Contabil/v3_nota_fiscal_inutilizar_conhecimento_saida';
const Authorization = Cypress.env('API.PRAGMA');

const Filial = "123123123";
const RegistroNota = "123123123";

describe('Fisco/Contábil - GET - /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota}', { env: { hideCredendials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades da inutilização de conhecimento de saída', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${Filial}/${RegistroNota}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('ID_Filial');
      expect(ret).to.have.property('ID_Registro_Nota');
      expect(ret).to.have.property('Status');
      expect(ret).to.have.property('Erros');
    });
  });
});