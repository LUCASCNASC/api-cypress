const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_post_estornar_baixa_titulo_areceber';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/estornar_baixa_titulo_areceber', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200 e as propriedades do estorno de baixa de título a receber', () => {

    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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

  it('Deve retornar 412 ao tentar estornar com payload inválido', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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