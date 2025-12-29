const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Compras/v3_post_pedido_compra_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST /Compras/v3_post_pedido_compra_incluir', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CNPJ_FilialPedido: "12345678000123",
        CNPJ_CPFFornecedor: "98765432000198"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('CNPJ_FilialPedido');
      expect(ret).to.have.property('CNPJ_CPFFornecedor');
      expect(ret).to.have.property('PedidoFornecedor');
      expect(ret).to.have.property('NumeroPedido');
      expect(ret).to.have.property('Registro_Nota');
      expect(ret).to.have.property('Registro_Nota_Armazem');
      expect(ret).to.have.property('Numero_Titulo');
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CNPJ_FilialPedido: "",
        CNPJ_CPFFornecedor: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});