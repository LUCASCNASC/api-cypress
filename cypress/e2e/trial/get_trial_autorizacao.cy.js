const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Trial/v3_get_trial_autorizacao';
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = "12345678910"; 
const idUsuario = "12345678910";
const triais = "12345678910"; 

describe('Trial - GET - /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idUsuario}/${triais}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('chaveTrial');
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('idUsuarioSupervisor');
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('nomeUsuarioSupervisor');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('descricaoTrial');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('permissao');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('status');
          expect(resposta.body.retorno[0].Gerente[0]).toHaveProperty('idUsuarioGerente');
          expect(resposta.body.retorno[0].Gerente[0]).toHaveProperty('nomeUsuarioGerente');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('descricaoTrial');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('permissao');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('status');
        });
    });
  });