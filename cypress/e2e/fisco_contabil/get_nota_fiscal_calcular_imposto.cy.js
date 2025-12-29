const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_nota_fiscal_calcular_imposto';
const Authorization = Cypress.env('API.PRAGMA');

const Filial = "123123123";
const RegistroNota = "123123123";

describe('Fisco/Contábil - GET - /Fisco/Contabil/v3_nota_fiscal_calcular_imposto', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${Filial}/${RegistroNota}`,
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
      expect(ret).to.have.property('Trial');
    });
  });
});