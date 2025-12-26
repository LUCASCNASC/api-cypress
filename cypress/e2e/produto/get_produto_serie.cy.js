const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Produto/v2_produto_serie';
const Authorization = Cypress.env('API.PRAGMA');

const filial_saldo = "12345678910"; 
const sku = "12345678910";
const pedido = "12345678910"; 

describe('API rest - Produto - GET - /Produto/v2_produto_serie', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${filial_saldo}/${sku}/${pedido}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('numeroSerie');
        expect(resposta.body.retorno[0]).toHaveProperty('dataMovimento');
      });
  });
});