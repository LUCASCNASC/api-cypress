const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pedido/v3_gerente_filial';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "12345678910";

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 200', () => {

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
        expect(resposta.body.retorno[0]).toHaveProperty('idUsuario');
        expect(resposta.body.retorno[0]).toHaveProperty('login');
        expect(resposta.body.retorno[0]).toHaveProperty('nome');
      });
  });
});