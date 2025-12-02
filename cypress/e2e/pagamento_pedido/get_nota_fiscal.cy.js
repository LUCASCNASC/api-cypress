const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pagamento%20pedido/v2_pag_pedido_nota_fiscal';
const Authorization = Cypress.env('API.PRAGMA');

const filial = "12345678910"; 
const pedido = "12345678910";
const registro_nota = "12345678910"; 

describe('API rest - Pagamento pedido - GET - /v3/nota_fiscal/{filial}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${filial}/${pedido}/${registro_nota}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
        expect(resposta.body.retorno[0]).toHaveProperty('pdf');
        expect(resposta.body.retorno[0]).toHaveProperty('size');
      });
  });
});