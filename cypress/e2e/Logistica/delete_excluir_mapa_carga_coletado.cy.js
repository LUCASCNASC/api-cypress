const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_delete_mapa_carga_coletado';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123"; 
const idMapaCarga = "123123123"; 
const TipoMapaCarga = "123123123";

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', { env: { hideCredendials: true } }, () => {

    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idMapaCarga}/${TipoMapaCarga}`, 
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