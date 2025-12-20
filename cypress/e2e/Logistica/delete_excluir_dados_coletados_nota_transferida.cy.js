const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_delete_excluir_dado_coletado_nota_transferida';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialOrigem = "123123123"; 
const idRegistroNotaOrigem = "123123123"; 

describe('API rest - Logística - DELETE - /Logística/v3_delete_excluir_dado_coletado_nota_transferida', { env: { hideCredendials: true } } , () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE', 
      url: `${BASE_URL}/${PATH}/${idFilialOrigem}/${idRegistroNotaOrigem}`, 
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