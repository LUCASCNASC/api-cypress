const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Pedido/v2_pedido_pendencia';
const Authorization = Cypress.env('API.PRAGMA');

const idpedidovenda = "12345678910"; 
const idvendedor = "12345678910"; 
const cnpj_cpf = "12345678910";
const listapedidovenda = "12345678910";

describe('API rest - Pedido - GET - /Pedido/v2_pedido_pendencia', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({({
      method: 'GET', 
      url: `${BASE_URL}/${PATH}/${idpedidovenda}/${idvendedor}/${cnpj_cpf}/${listapedidovenda}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('codigo_pedido');
        expect(resposta.body.retorno[0]).toHaveProperty('idsituacaopedidovenda');
        expect(resposta.body.retorno[0]).toHaveProperty('geradovendamobile');
        expect(resposta.body.retorno[0]).toHaveProperty('data_inclusao');
        expect(resposta.body.retorno[0]).toHaveProperty('cliente');
        expect(resposta.body.retorno[0]).toHaveProperty('vendedor');
        expect(resposta.body.retorno[0]).toHaveProperty('nome_vendedor');
        expect(resposta.body.retorno[0]).toHaveProperty('total_pedido');
        expect(resposta.body.retorno[0]).toHaveProperty('idpropostacredito');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaopropostacredito');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao_pendencia');
      });
  });
});