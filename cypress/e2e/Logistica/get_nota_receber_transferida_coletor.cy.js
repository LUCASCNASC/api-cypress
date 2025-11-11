const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_get_carregar_nota_transferida_coletor';
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = "123123123";

describe('Logística - GET - /v3/nota_receber_transferida_coletor/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        });
    });
  });