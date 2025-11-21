const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Sessão/v2_sessao_login_complementos';
const Authorization = Cypress.env('API.PRAGMA');

const ambiente = "12345678910";

describe('Sessão - GET - /v3/login_complementos', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET',
        url: `${BASE_URL}/${PATH_API}/${ambiente}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('login');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('vendedor');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('tipoFilialRelacionada');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('padrao');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('vendaremotasementrega');
          expect(resposta.body.retorno[0]).toHaveProperty('gerente');
          expect(resposta.body.retorno[0]).toHaveProperty('administrador');
          expect(resposta.body.retorno[0]).toHaveProperty('nivelacessodadopessoal');
          expect(resposta.body.retorno[0]).toHaveProperty('utilizaappsabium');
        });
    });
  });