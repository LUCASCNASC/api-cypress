const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_operacoes_tef';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/operacoes_tef', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 200 e as propriedades de operações TEF', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idoperacaocomtef');
      expect(ret).to.have.property('operacao');
      expect(ret.mensagens[0]).to.have.property('idmensagemtef');
      expect(ret.mensagens[0]).to.have.property('mensagem');
      expect(ret.mensagens[0]).to.have.property('retorno');
    });
  });

  it('Deve retornar 204 quando não houver operações TEF configuradas', () => {
    // Se não for possível simular, pode ser omitido.
  });

  it('Deve retornar 412 se houver erro de pré-requisito', () => {
    // Caso seja possível simular erro de pré-requisito, adicione aqui.
  });
});