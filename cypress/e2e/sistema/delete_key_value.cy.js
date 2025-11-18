const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sistema/v2_sistema_key_value_delete';
const Authorization = Cypress.env('API.PRAGMA')

describe('Sistema - DELETE - /v3/key_value/{key}', { env: { hideCredendials: true } } , () => {

  const key = "12345678910"; 
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE',
        url: `${BASE_URL}/${PATH_API}/${key}`,
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