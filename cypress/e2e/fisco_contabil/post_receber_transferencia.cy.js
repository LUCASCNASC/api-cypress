const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_receber_transferencia';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST - /v3/receber_transferencia', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Serie": "string",
        "Numero_Documento_Fiscal": "string"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('IgnorarSituacaoSefaz');
      expect(ret.Notas[0]).to.have.property('IdFilialOrigem');
      expect(ret.Notas[0]).to.have.property('NumeroNota');
      expect(ret.Notas[0]).to.have.property('IdNFeSefaz');
      expect(ret).to.have.property('Mensagem');
      expect(ret).to.have.property('QtdeNotasRecebidas');
    });
  });
});