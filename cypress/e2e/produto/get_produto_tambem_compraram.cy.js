const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Produto/v2_produto_tambem_compraram';
const Authorization = Cypress.env('API.PRAGMA');

const lista = "12345678910";

describe('API rest - Produto - GET - /Produto/v2_produto_tambem_compraram', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${lista}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('codigo');
        expect(resposta.body.retorno[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0]).toHaveProperty('departamento_codigo');
        expect(resposta.body.retorno[0]).toHaveProperty('departamento_descricao');
        expect(resposta.body.retorno[0]).toHaveProperty('marca_codigo');
        expect(resposta.body.retorno[0]).toHaveProperty('marca_descricao');
        expect(resposta.body.retorno[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0]).toHaveProperty('tempromocao');
        expect(resposta.body.retorno[0]).toHaveProperty('temsaldo');
        expect(resposta.body.retorno[0]).toHaveProperty('servico');
        expect(resposta.body.retorno[0]).toHaveProperty('imagem');
        expect(resposta.body.retorno[0]).toHaveProperty('ordem');
      });
  });
});