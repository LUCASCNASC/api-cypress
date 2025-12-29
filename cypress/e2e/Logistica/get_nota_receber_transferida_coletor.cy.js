const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Logística/v3_get_carregar_nota_transferida_coletor';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";

describe('Logística - GET - /Logística/v3_get_carregar_nota_transferida_coletor', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    const requestBody = 

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${idFilial}`, 
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