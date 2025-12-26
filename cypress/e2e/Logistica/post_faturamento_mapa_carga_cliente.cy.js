const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_post_logistica_faturamentomapacargacliente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Logística - POST - /Logística/v3_post_logistica_faturamentomapacargacliente', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idFilial');
        expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idRegistroNota');
        expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('numeroNota');
      });
  });
});