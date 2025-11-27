const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Proposta%20crédito/v2_proposta_credito_situacao';
const Authorization = Cypress.env('API.PRAGMA');

const codigo = "12345678910"; 

describe('API rest - Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${codigo}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idmensagempadraopropostacredito');
        expect(resposta.body.retorno[0]).toHaveProperty('mensagem');
      });
  });
});