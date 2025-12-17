const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_servico_vinculado';
const Authorization = Cypress.env('API.PRAGMA');

const clienteSemServico = "00000000000000";
const processoSemServico = "000000";
const clienteValido = "12345678901234";
const processoValido = "000000";

describe('API rest - Cliente - GET /Cliente/v3_cliente_servico_vinculado', { env: { hideCredentials: true } }, () => {
   
  it('Status Code: 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteValido}/${processoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idPedido');
      expect(ret).to.have.property('idItemBase');
      expect(ret).to.have.property('sku');
      expect(ret).to.have.property('nomeProduto');
      expect(ret).to.have.property('valor');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('tipoOrigem');
      expect(ret).to.have.property('descricaoTipoOrigem');
    });
  });

  it('Status Code: 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteSemServico}/${processoSemServico}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});