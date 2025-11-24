const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_post_gravar_mapa_carga_coletado';
const Authorization = Cypress.env('API.PRAGMA');

describe('Logística - POST - /v3/gravar_mapa_carga_coletado', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 200', () => {

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
      });
  });
});