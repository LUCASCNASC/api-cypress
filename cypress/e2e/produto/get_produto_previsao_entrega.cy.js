const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Produto/v2_produto_previsao_entrega';
const Authorization = Cypress.env('API.PRAGMA');


describe('Produtos - GET - /v3/produto_previsao_entrega ', { env: { hideCredendials: true } }, () => {

  const processo_venda = "12345678910";
  const filial = "12345678910"; 
  const filial_faturar = "12345678910"; 
  const filial_saldo = "12345678910"; 
  const sku = "12345678910"; 
  const quantidade = "12345678910";
  const local_saldo = "12345678910"; 
    
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${processo_venda}/${filial}/${filial_faturar}/${filial_saldo}/${sku}/${quantidade}/${local_saldo}`, 
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