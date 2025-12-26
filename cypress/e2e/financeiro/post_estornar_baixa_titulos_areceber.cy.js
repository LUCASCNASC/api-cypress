const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_post_estornar_baixa_titulo_areceber';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_post_estornar_baixa_titulo_areceber', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        idTitulo: 456
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Empresa');
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('Titulo');
      expect(ret).to.have.property('Qtde_Baixa_Estornadas');
      expect(ret).to.have.property('Titulo_AReceber_Gerado');
      expect(ret).to.have.property('Titulo_APagar_Gerado');
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