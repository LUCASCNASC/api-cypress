const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Financeiro/v3_financeiro_formas_pagamento_titulos';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Financeiro - POST /Financeiro/v3_financeiro_formas_pagamento_titulos', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 201', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        titulos: [{idTitulo: 1, idFilial: 1}]
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idEmpresa');
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTipoTitulo');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('parcela');
      expect(ret.formasPagamento[0]).to.have.property('tipo');
      expect(ret.formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret).to.have.property('valorAtual');
      expect(ret).to.have.property('valorOriginal');
      expect(ret).to.have.property('dataVencimento');
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        titulos: [{idTitulo: null, idFilial: null}]
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});