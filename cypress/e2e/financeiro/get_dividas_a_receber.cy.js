const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_dividas_a_receber';
const Authorization = Cypress.env('API.PRAGMA');

const idFilialValido = "123123123";
const cpf_cnpjValido = "123123123";
const separarvinculados = "123123123";
const limit = "123123123";
const offset = "123123123";
const idFilialSemTitulos = "99999";
const cpf_cnpjSemTitulos = "00000000000000";
const idFilialInvalido = "abc";
const cpf_cnpjInvalido = "xyz";

describe('API rest - Financeiro - GET /Financeiro/v3_financeiro_dividas_a_receber', { env: { hideCredentials: true } }, () => {

  it('Status Code: 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialValido}/${cpf_cnpjValido}/${separarvinculados}/${limit}/${offset}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idEmpresa');
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('parcela');
      expect(ret).to.have.property('processo');
      expect(ret).to.have.property('descricaoProcesso');
      expect(ret).to.have.property('calculaJurosBacen');
      expect(ret).to.have.property('dataInclusao');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('diasVencido');
      expect(ret).to.have.property('valorOriginal');
      expect(ret).to.have.property('possuiboleto');
      expect(ret.formasPagamento[0]).to.have.property('tipo');
      expect(ret.formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret.formasPagamento[0]).to.have.property('valor');
      expect(ret.pedidos[0]).to.have.property('idFilial');
      expect(ret.pedidos[0]).to.have.property('idPedidoVenda');
      expect(ret.vinculados[0]).to.have.property('idEmpresa');
      expect(ret.vinculados[0]).to.have.property('idFilial');
      expect(ret.vinculados[0]).to.have.property('idTitulo');
      expect(ret.vinculados[0]).to.have.property('idParcelaTitulo');
      expect(ret.vinculados[0]).to.have.property('idParcialTitulo');
      expect(ret.vinculados[0]).to.have.property('parcela');
      expect(ret.vinculados[0]).to.have.property('processo');
      expect(ret.vinculados[0]).to.have.property('descricaoProcesso');
      expect(ret.vinculados[0]).to.have.property('calculaJurosBacen');
      expect(ret.vinculados[0]).to.have.property('dataInclusao');
      expect(ret.vinculados[0]).to.have.property('dataVencimento');
      expect(ret.vinculados[0]).to.have.property('diasVencido');
      expect(ret.vinculados[0]).to.have.property('valorOriginal');
      expect(ret.vinculados[0]).to.have.property('possuiboleto');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('tipo');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('valor');
      expect(ret.vinculados[0].pedidos[0]).to.have.property('idFilial');
      expect(ret.vinculados[0].pedidos[0]).to.have.property('idPedidoVenda');
      expect(ret).to.have.property('quantidadeTotalRegistro');
    });
  });

  it('Status Code: 204', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialSemTitulos}/${cpf_cnpjSemTitulos}/${separarvinculados}/${limit}/${offset}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code: 412', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilialInvalido}/${cpf_cnpjInvalido}/${separarvinculados}/${limit}/${offset}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});