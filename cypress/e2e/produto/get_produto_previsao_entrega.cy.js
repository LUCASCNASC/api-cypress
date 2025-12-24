const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Produto/v2_produto_previsao_entrega';
const Authorization = Cypress.env('API.PRAGMA');

const processo_venda = "12345678910";
const filial = "12345678910"; 
const filial_faturar = "12345678910"; 
const filial_saldo = "12345678910"; 
const sku = "12345678910"; 
const quantidade = "12345678910";
const local_saldo = "12345678910"; 

describe('API rest - Produto - GET - /Produto/v2_produto_previsao_entrega', { env: { hideCredendials: true } }, () => {
    
  it('Status Code is 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${processo_venda}/${filial}/${filial_faturar}/${filial_saldo}/${sku}/${quantidade}/${local_saldo}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('dataprevisaoentrega');
      });
  });
});