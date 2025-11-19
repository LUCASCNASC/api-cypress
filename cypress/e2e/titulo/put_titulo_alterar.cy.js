const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Titulo/v3_put_titulo_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Titulo - PUT - /v3/titulo_alterar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'PUT', 
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