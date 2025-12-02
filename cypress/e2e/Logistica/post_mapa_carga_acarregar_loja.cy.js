const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_post_mapa_carga_acarregar_loja';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Logística - POST - /v3/mapa_carga_acarregar_loja', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
      headers: { Authorization },
      
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdeitens');
        expect(resposta.body.retorno[0]).toHaveProperty('filialdetalhe');
        expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
        expect(resposta.body.retorno[0]).toHaveProperty('nomemotorista');
        expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});