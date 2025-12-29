const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
const Authorization = Cypress.env('API.PRAGMA');

describe('Pagamento pedido - POST - /Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH}`,
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