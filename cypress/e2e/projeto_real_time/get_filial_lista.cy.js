const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Projeto%20Real%20Time/v3_get_filial_lista';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Projeto Real Time - GET - /v3/filial_lista/', { env: { hideCredendials: true } }, () => {
  
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
        expect(resposta.body.retorno[0]).toHaveProperty('EMPRESA');
        expect(resposta.body.retorno[0]).toHaveProperty('CNPJ');
        expect(resposta.body.retorno[0]).toHaveProperty('RAZAO_SOCIAL');
        expect(resposta.body.retorno[0]).toHaveProperty('LOGRADOURO');
        expect(resposta.body.retorno[0]).toHaveProperty('NUMERO');
        expect(resposta.body.retorno[0]).toHaveProperty('COMPLEMENTO');
        expect(resposta.body.retorno[0]).toHaveProperty('CIDADE');
        expect(resposta.body.retorno[0]).toHaveProperty('UF');
        expect(resposta.body.retorno[0]).toHaveProperty('CEP');
      });
  });
});