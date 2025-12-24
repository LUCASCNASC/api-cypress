const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_regra_fiscal_cfop_get';
const Authorization = Cypress.env('API.PRAGMA');

const UFOrigem = "123123123"; 
const UFDestino = "123123123";
const UFTomador = "123123123";
const OrigemProduto = "123123123";

describe('API rest - Fisco/Contábil - GET - /Fisco/Contabil/v3_regra_fiscal_cfop_get', { env: { hideCredendials: true } }, () => {
  
  it('Status Code is 200', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${UFOrigem}/${UFDestino}/${UFTomador}/${OrigemProduto}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const cfop = response.body.retorno[0].notasfiscais[0];
      expect(cfop).to.have.property('UF_Origem');
      expect(cfop).to.have.property('UF_Destino');
      expect(cfop).to.have.property('Id_Codigo_Fiscal');
      expect(cfop).to.have.property('Id_Tipo_Contribuinte');
      expect(cfop).to.have.property('Id_Observacao_Fiscal');
      expect(cfop).to.have.property('Id_Situacao_Tributaria');
      expect(cfop).to.have.property('Aliquota');
      expect(cfop).to.have.property('Percentual_Base');
      expect(cfop).to.have.property('Id_Tipo_Imposto');
      expect(cfop).to.have.property('Zerar_Livro');
      expect(cfop).to.have.property('Percentual_Diferido');
      expect(cfop).to.have.property('Valor_Minimo_Base');
      expect(cfop).to.have.property('Id_Usuario');
      expect(cfop).to.have.property('Data_Hora_Alteracao');
      expect(cfop).to.have.property('Percentual_Desconto_Nota');
      expect(cfop).to.have.property('Valor_Maximo_Base');
      expect(cfop).to.have.property('Imposto_Deduzir_IRPF');
      expect(cfop).to.have.property('Id_Base_Fiscal_CFOP');
      expect(cfop).to.have.property('Id_Natureza_Receita');
      expect(cfop).to.have.property('Id_Empresa');
      expect(cfop).to.have.property('Data_Inicial');
      expect(cfop).to.have.property('Teto_Maximo');
      expect(cfop).to.have.property('Aliquota_UF_Destino');
      expect(cfop).to.have.property('Percentual_Base_UF_Destino');
      expect(cfop).to.have.property('Percentual_Partilha_UF_Destino');
      expect(cfop).to.have.property('Id_Enquadramento_IPI');
      expect(cfop).to.have.property('Desoneracao');
      expect(cfop).to.have.property('Id_Motivo_Desoneracao');
      expect(cfop).to.have.property('Id_Situacao_Origem');
      expect(cfop).to.have.property('Aliquota_Importacao');
      expect(cfop).to.have.property('Registra_Desconto_ICMS');
      expect(cfop).to.have.property('Percentual_Credito_Presumido');
      expect(cfop).to.have.property('Deducao_Base_Calculo_Impostos');
      expect(cfop).to.have.property('Id_Tipo_Calculo_Difal');
      expect(cfop).to.have.property('Area_Livre_Comercio');
      expect(cfop).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_ICMS');
      expect(cfop).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino');
      expect(cfop).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP');
      expect(cfop).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino');
      expect(cfop).to.have.property('Vlr_Ajuste_Igual_Vlr_Imposto');
      expect(cfop).to.have.property('Aliquota_FCP');
      expect(cfop).to.have.property('Aliquota_FCP_UF_Destino');
      expect(cfop).to.have.property('Deduzir_ICMS_BC');
      expect(cfop).to.have.property('Aliquota_Interestadual');
      expect(cfop).to.have.property('Id_Tipo_Pessoa');
      expect(cfop).to.have.property('Id_Tipo_Calculo_Diferimento');
      expect(cfop).to.have.property('Data_Final');
      expect(cfop).to.have.property('Deduzir_ICMS_ST_BC');
      expect(cfop).to.have.property('Id_Tipo_Contribuinte_Destinatario');
      expect(cfop).to.have.property('UF_Tomador');
      expect(cfop).to.have.property('Deduzir_IPI_BC');
      expect(cfop).to.have.property('Deduzir_Difal_Base');
    });
  });
});