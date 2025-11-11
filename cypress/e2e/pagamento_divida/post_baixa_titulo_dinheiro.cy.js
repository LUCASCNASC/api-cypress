const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pagamento%20divida/v2_divida_baixa_titulo';
const Authorization = Cypress.env('API.PRAGMA')

describe('Pagamento divida - POST - /v3/baixa_titulo', { env: { hideCredendials: true } }, () => {
  
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