const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pagamento%20divida/v2_divida_processar_proxima_baixa_pendente';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/processar_proxima_baixa_pendente', { env: { hideCredendials: true } }, () => {
  
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