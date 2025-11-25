
const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_post_previsao_entrega_mapa_carga_cliente';
const Authorization = Cypress.env('API.PRAGMA');

describe('Logística - POST - /v3/previsao_entrega_mapa_carga_cliente', { env: { hideCredendials: true } }, () => {
  
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
        expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idMapaCarga');
        expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoEntrega');
        expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoMontagem');
        expect(resposta.body.retorno[0]).toHaveProperty('pesoDisponivel');
        expect(resposta.body.retorno[0]).toHaveProperty('volumeDisponivel');
      });
  });
});