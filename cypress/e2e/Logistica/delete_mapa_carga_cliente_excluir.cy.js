const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_delete_logistica_mapa_carga_cliente';
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - DELETE - /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga}', { env: { hideCredendials: true } }, () => {
  
  const idFilial = "123123123";
  const idMapaCarga = "123123123";
  const idFilialPedido = "123123123";
  const idPedidoVenda = "123123123";

    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${idMapaCarga}/${idFilialPedido}/${idPedidoVenda}`, 
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