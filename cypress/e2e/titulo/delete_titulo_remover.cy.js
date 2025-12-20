const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Titulo/v3_delete_titulo_remover';
const Authorization = Cypress.env('API.PRAGMA');

const numeroEmpresa = "12345678910"; 
const numeroFilial = "12345678910"; 
const tipoTitulo = "12345678910";
const numeroTitulo = "12345678910";   

describe('API rest - Titulo - DELETE - /Titulo/v3_delete_titulo_remover, { env: { hideCredendials: true } }', () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'DELETE', 
      url: `${BASE_URL}/${PATH}/${numeroEmpresa}/${numeroFilial}/${tipoTitulo}/${numeroTitulo}`, 
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