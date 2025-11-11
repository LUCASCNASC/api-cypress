const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Proposta%20crédito/v2_proposta_credito_agrupar';
const Authorization = Cypress.env('API.PRAGMA')

describe('Proposta crédito - POST - /v3/proposta_credito_agrupar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/`, 
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