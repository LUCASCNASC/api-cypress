const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sistema/v2_sistema_parametro_sistema';
const Authorization = Cypress.env('API.PRAGMA');

describe('Sistema - GET - /v3/parametros_sitema', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('usaintencaocompra');
        expect(resposta.body.retorno[0]).toHaveProperty('usaposvenda');
        expect(resposta.body.retorno[0]).toHaveProperty('maximodiasprevisaoentrega');
        expect(resposta.body.retorno[0]).toHaveProperty('visualizarmgc');
        expect(resposta.body.retorno[0]).toHaveProperty('maximodiaspropostacredito');
        expect(resposta.body.retorno[0]).toHaveProperty('url_ecommerce');
        expect(resposta.body.retorno[0]).toHaveProperty('idusuarioremetente');
        expect(resposta.body.retorno[0]).toHaveProperty('trialremoverinfocomplementarcadastrocliente');
        expect(resposta.body.retorno[0]).toHaveProperty('trialremoveranexocadastrocliente');
      });
  });
});