const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pagamento%20pedido/v2_pag_pedido_contrato_servico';
const Authorization = Cypress.env('API.PRAGMA');

const filial = "12345678910";
const pedido = "12345678910";

describe('API rest - Pagamento pedido - GET - /v3/contrato_servico/{filial}/{pedido}', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${filial}/${pedido}`, 
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