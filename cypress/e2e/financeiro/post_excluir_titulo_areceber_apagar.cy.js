const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_excluir_titulo_areceber_apagar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_excluir_titulo_areceber_apagar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 222
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Empresa');
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('Titulo');
      expect(ret).to.have.property('CNPJ_CPF');
      expect(ret).to.have.property('Erros');
    });
  });

  it('Status Code is 412', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: null
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});