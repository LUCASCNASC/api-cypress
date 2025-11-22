const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_renovacao';
const Authorization = Cypress.env('API.PRAGMA');

const clienteInvalido = "00000000000001";
const clienteSemRenovacao = "00000000000000";
const clienteValido = "12345678901234";

describe('API - Cliente - GET /v3/cliente_renovacao/{cliente}', { env: { hideCredentials: true } }, () => {

  it('Deve retornar 200 e as propriedades de renovação para um cliente válido', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteValido}`,
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

  it('Deve retornar 204 quando não houver renovações para o cliente', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteSemRenovacao}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para cliente inválido', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});