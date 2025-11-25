const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_documento_diverso_lista';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/documento_diverso_lista/', { env: { hideCredendials: true } }, () => {
  
  it('Status Code 200 e as propriedades dos documentos diversos', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Data_Inicial": "2024-01-01",
        "Data_Final": "2024-01-31"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const doc = response.body.retorno[0].documentos[0];
      expect(doc).to.have.property('idempresa');
      expect(doc).to.have.property('idfilial');
      expect(doc).to.have.property('iddocumentodiverso');
      expect(doc).to.have.property('idprocesso');
      expect(doc).to.have.property('descricao');
      expect(doc).to.have.property('datamovimento');
      expect(doc).to.have.property('documento');
      expect(doc).to.have.property('cnpj_cpf');
      expect(doc).to.have.property('nome');
      expect(doc).to.have.property('documentoreferenciado');
      expect(doc).to.have.property('valor');
      expect(doc).to.have.property('idusuario');
      expect(doc).to.have.property('observacao');
      expect(doc.notas[0]).to.have.property('idregistronota');
      expect(doc.notas[0]).to.have.property('numeronota');
      expect(doc.notas[0]).to.have.property('serie');
      expect(doc.notas[0]).to.have.property('totaldespesas');
      expect(doc.notas[0]).to.have.property('totaloutras');
      expect(doc.notas[0]).to.have.property('totalnota');
      expect(doc.notas[0]).to.have.property('CadastroNacionalObras');
      expect(doc.notas[0]).to.have.property('IdIndicativoPrestacaoServicoReinf');
      expect(doc.notas[0]).to.have.property('IdTipoRepasseReinf');
      expect(doc.notas[0]).to.have.property('IdClassificacaoServicoPrestadoRein');
      expect(doc.impostos[0]).to.have.property('idregistronota');
      expect(doc.impostos[0]).to.have.property('tipoimposto');
      expect(doc.impostos[0]).to.have.property('valorbasecalculo');
      expect(doc.impostos[0]).to.have.property('aliquota');
      expect(doc.impostos[0]).to.have.property('valorimposto');
      expect(doc.titulos[0]).to.have.property('idtitulo');
      expect(doc.titulos[0]).to.have.property('idparcelatitulo');
      expect(doc.titulos[0]).to.have.property('datavencimento');
      expect(doc.titulos[0]).to.have.property('valorcontabil');
      expect(doc.titulos[0]).to.have.property('formapagamento');
      expect(doc.centrocusto[0]).to.have.property('classificacao');
      expect(doc.centrocusto[0]).to.have.property('descricao');
      expect(doc.centrocusto[0]).to.have.property('tipoimposto');
      expect(doc.centrocusto[0]).to.have.property('tipo');
      expect(doc.centrocusto[0]).to.have.property('valor');
      expect(doc.contacorrente[0]).to.have.property('idlancamento');
      expect(doc.contacorrente[0]).to.have.property('idhistoricocontacorrente');
      expect(doc.contacorrente[0]).to.have.property('descricao');
      expect(doc.contacorrente[0]).to.have.property('valor');
    });
  });
});