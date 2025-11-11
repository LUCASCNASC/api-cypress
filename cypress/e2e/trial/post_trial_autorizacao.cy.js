const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Trial/v3_post_trial_autorizacao';
const Authorization = Cypress.env('API.PRAGMA')

describe('Trial - POST - /v3/trial_autorizacao', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });