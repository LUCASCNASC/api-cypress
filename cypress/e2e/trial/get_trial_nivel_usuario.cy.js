const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Trial/v3_get_trial_nivel_usuario';
const Authorization = Cypress.env('API.PRAGMA');

const idTrial = "12345678910";
const quantidadeNivel = "12345678910"; 

describe('API rest - Trial - GET - /Trial/v3_get_trial_nivel_usuario', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${idTrial}/${quantidadeNivel}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })  
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('nivel');
        expect(resposta.body.retorno[0]).toHaveProperty('idusuario');
        expect(resposta.body.retorno[0]).toHaveProperty('nomeusuario');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaotrial');
      });
  });
});