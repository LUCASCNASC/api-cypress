const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Gestão%20Devolução/v2_gestao_devolucao_efetivar_proposta_abatimento';
const Authorization = Cypress.env('API.PRAGMA');

describe('Gestão Devolução - POST /Gestão%20Devolução/v2_gestao_devolucao_efetivar_proposta_abatimento', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`, 
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