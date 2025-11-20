const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Inventário/v3_get_itens_inventario';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idInventario = "123123123"; 

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', { env: { hideCredendials: true } }, () => {

    it('Resposta 200', () => {
      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idInventario}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idProduto');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeX');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeY');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('codigoBarra');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoFilial');

        });
    });
  });