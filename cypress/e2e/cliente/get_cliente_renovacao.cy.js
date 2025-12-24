const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Cliente/v2_cliente_renovacao';
const Authorization = Cypress.env('API.PRAGMA');

const clienteInvalido = "00000000000001";
const clienteSemRenovacao = "00000000000000";
const clienteValido = "12345678901234";

describe('API rest - Cliente - GET /Cliente/v2_cliente_renovacao', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idPedido');
      expect(ret).to.have.property('idRegistroNota');
      expect(ret).to.have.property('idOrigem');
      expect(ret).to.have.property('codigoOrigem');
      expect(ret).to.have.property('nomeOrigem');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('tipoOrigem');
      expect(ret).to.have.property('servico');
      expect(ret.servico[0]).to.have.property('codigo');
      expect(ret.servico[0]).to.have.property('nome');
      expect(ret.servico[0]).to.have.property('valor');
    });
  });

  it('Status Code is 204', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteSemRenovacao}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH}/${clienteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});