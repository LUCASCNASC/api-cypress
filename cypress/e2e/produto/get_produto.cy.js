const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Produto/v2_produto_get';
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - GET - /v3/produto ', { env: { hideCredendials: true } }, () => {

  const termo = "12345678910"; 
  const departamento = "12345678910"; 
  const marca = "12345678910"; 
  const so_promocao = "true"; 
  const so_servico = "false";
  
    it('Resposta 200', () => {''

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${termo}/${departamento}/${marca}/${so_promocao}/${so_servico}`, 
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