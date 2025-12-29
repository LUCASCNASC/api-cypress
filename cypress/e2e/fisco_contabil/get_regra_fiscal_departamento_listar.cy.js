const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Fisco/Contabil/v3_regra_fiscal_departamento_get';
const Authorization = Cypress.env('API.PRAGMA');

const Grupo = "123123123";
const UF = "123123123";
const CFOP = "123123123";
const OrigemProduto = "123123123";

describe('Fisco/Contábil - GET - /Fisco/Contabil/v3_regra_fiscal_departamento_get', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH}/${Grupo}/${UF}/${CFOP}/${OrigemProduto}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const dep = response.body.retorno[0].notasfiscais[0];
      expect(dep).to.have.property('UF_Origem');
      expect(dep).to.have.property('UF_Destino');
      expect(dep).to.have.property('Id_Codigo_Fiscal');
      expect(dep).to.have.property('Id_Tipo_Contribuinte');
      expect(dep).to.have.property('Id_Observacao_Fiscal');
      expect(dep).to.have.property('Id_Situacao_Tributaria');
      expect(dep).to.have.property('Aliquota');
      expect(dep).to.have.property('Percentual_Base');
      expect(dep).to.have.property('Id_Tipo_Imposto');
      expect(dep).to.have.property('Zerar_Livro');
      expect(dep).to.have.property('Percentual_Diferido');
      expect(dep).to.have.property('Valor_Minimo_Base');
      expect(dep).to.have.property('Id_Usuario');
      expect(dep).to.have.property('Data_Hora_Alteracao');
      expect(dep).to.have.property('Percentual_Desconto_Nota');
      expect(dep).to.have.property('Valor_Maximo_Base');
      expect(dep).to.have.property('Imposto_Deduzir_IRPF');
      expect(dep).to.have.property('Id_Base_Fiscal_CFOP');
      expect(dep).to.have.property('Id_Natureza_Receita');
      expect(dep).to.have.property('Id_Empresa');
      expect(dep).to.have.property('Data_Inicial');
      expect(dep).to.have.property('Teto_Maximo');
      expect(dep).to.have.property('Aliquota_UF_Destino');
      expect(dep).to.have.property('Percentual_Base_UF_Destino');
      expect(dep).to.have.property('Percentual_Partilha_UF_Destino');
      expect(dep).to.have.property('Id_Enquadramento_IPI');
      expect(dep).to.have.property('Desoneracao');
      expect(dep).to.have.property('Id_Motivo_Desoneracao');
      expect(dep).to.have.property('Id_Situacao_Origem');
      expect(dep).to.have.property('Aliquota_Importacao');
      expect(dep).to.have.property('Registra_Desconto_ICMS');
      expect(dep).to.have.property('Percentual_Credito_Presumido');
      expect(dep).to.have.property('Deducao_Base_Calculo_Impostos');
      expect(dep).to.have.property('Id_Tipo_Calculo_Difal');
      expect(dep).to.have.property('Area_Livre_Comercio');
      expect(dep).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_ICMS');
      expect(dep).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino');
      expect(dep).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP');
      expect(dep).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino');
      expect(dep).to.have.property('Vlr_Ajuste_Igual_Vlr_Imposto');
      expect(dep).to.have.property('Aliquota_FCP');
      expect(dep).to.have.property('Aliquota_FCP_UF_Destino');
      expect(dep).to.have.property('Deduzir_ICMS_BC');
      expect(dep).to.have.property('Aliquota_Interestadual');
      expect(dep).to.have.property('Id_Tipo_Pessoa');
      expect(dep).to.have.property('Id_Tipo_Calculo_Diferimento');
      expect(dep).to.have.property('Data_Final');
      expect(dep).to.have.property('Deduzir_ICMS_ST_BC');
      expect(dep).to.have.property('Id_Tipo_Contribuinte_Destinatario');
      expect(dep).to.have.property('UF_Tomador');
      expect(dep).to.have.property('Deduzir_IPI_BC');
      expect(dep).to.have.property('Deduzir_Difal_Base');
    });
  });
});