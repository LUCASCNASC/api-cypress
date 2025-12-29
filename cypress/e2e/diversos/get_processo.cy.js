const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Diversos/v2_diversos_processo';
const Authorization = Cypress.env('API.PRAGMA');

describe('Diversos - GET /Diversos/v2_diversos_processo', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigo');
      expect(ret).to.have.property('descricao');
      expect(ret).to.have.property('diasamaismontagem');
      expect(ret).to.have.property('rotaobrigatoria');
      expect(ret).to.have.property('aceitavendasemsaldo_local');
      expect(ret).to.have.property('aceitavendasemsaldo_remota');
      expect(ret).to.have.property('tipoupdatesaldoprodutolocal');
      expect(ret).to.have.property('tipoupdatesaldoprodutoremoto');
      expect(ret).to.have.property('alteranomepessoavenda');
      expect(ret).to.have.property('solicitafiador');
      expect(ret).to.have.property('solicitartransportadora');
      expect(ret).to.have.property('imprimiraoconfirmar');
      expect(ret).to.have.property('avisaestoquenegativo');
      expect(ret).to.have.property('permitirdescontopromocao');
      expect(ret).to.have.property('somenteservico');
      expect(ret).to.have.property('visualizarrentabilidadeemarkup');
      expect(ret).to.have.property('visualizarcomissao');
      expect(ret).to.have.property('trialvendasemsaldo');
      expect(ret).to.have.property('locaisdesaldo');
      expect(ret.formaspagamentoavista[0]).to.have.property('codigo');
      expect(ret.formaspagamentoavista[0]).to.have.property('descricao');
      expect(ret.formaspagamentoavista[0]).to.have.property('vencimentoem');
      expect(ret.servicosautomaticos[0]).to.have.property('codigo');
      expect(ret.servicosautomaticos[0]).to.have.property('nome');
      expect(ret.servicosautomaticos[0]).to.have.property('valor');
      expect(ret.servicosautomaticos[0].processoisentojuros[0]).to.have.property('idprocesso');
      expect(ret.servicosautomaticos[0].processoisentojuros[0]).to.have.property('descricaoprocesso');
      expect(ret.servicofrete[0]).to.have.property('codigo');
      expect(ret.servicofrete[0]).to.have.property('descricao');
      expect(ret.servicofrete[0]).to.have.property('valor_fixo');
      expect(ret.servicofrete[0]).to.have.property('valor_minimo');
      expect(ret.servicofrete[0]).to.have.property('valor_maximo');
      expect(ret.servicofrete[0]).to.have.property('percentual_fixo');
      expect(ret.servicofrete[0]).to.have.property('obrigatorio_cobrar');
      expect(ret.servicofrete[0]).to.have.property('permite_alterar');
    });
  });
});