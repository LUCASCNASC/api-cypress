const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Titulo/v3_delete_titulo_remover';
const Authorization = Cypress.env('API.PRAGMA')
const numeroEmpresa = "12345678910"; 
const numeroFilial = "12345678910"; 
const tipoTitulo = "12345678910";
const numeroTitulo = "12345678910"; 

describe('Titulo - DELETE - /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo}, { env: { hideCredendials: true } }', () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/${PATH_API}/${numeroEmpresa}/${numeroFilial}/${tipoTitulo}/${numeroTitulo}`, 
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