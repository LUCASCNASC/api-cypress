const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Produto/v2_produto_bloqueio';
const Authorization = Cypress.env('API.PRAGMA');

const filial_saldo = "12345678910";
const sku = "12345678910"; 
const id_cnpj_cpf = "12345678910";

describe('API rest - Produto - GET - /Produto/v2_produto_bloqueio', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${filial}/${sku}/${id_cnpj_cpf}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('ProdutoBloqueado');
        expect(resposta.body.retorno[0]).toHaveProperty('ProdutoNaoLiberado');
      });
  });
});