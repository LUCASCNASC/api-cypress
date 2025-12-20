
const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_post_previsao_entrega_mapa_carga_cliente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Logística - POST - /Logística/v3_post_previsao_entrega_mapa_carga_cliente', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => { 

    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idMapaCarga');
        expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoEntrega');
        expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoMontagem');
        expect(resposta.body.retorno[0]).toHaveProperty('pesoDisponivel');
        expect(resposta.body.retorno[0]).toHaveProperty('volumeDisponivel');
      });
  });
});