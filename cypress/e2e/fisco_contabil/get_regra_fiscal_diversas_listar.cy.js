const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_diversas_get';
const Authorization = Cypress.env('API.PRAGMA');

const TipoBase = "123123123";
const CFOP = "123123123123123123"
const Identificador = "";
const Pessoa = "123123123";
const Grupo = "123123123";
const OrigemProduto = "123123123";

describe('API rest - Fisco/Contábil - GET - /Fisco/Contabil/v3_regra_fiscal_diversas_get', { env: { hideCredendials: true } }, () => {

  it('Status Code 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${TipoBase}/${CFOP}/${Identificador}/${Pessoa}/${Grupo}/${OrigemProduto}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const diversas = response.body.retorno[0];
      expect(diversas).to.have.property('Id_Tipo_Base_Fiscal');
      expect(diversas).to.have.property('Id_Identificador');
      expect(diversas).to.have.property('Id_Grupo');
      expect(diversas).to.have.property('Id_Codigo_Fiscal');
      expect(diversas).to.have.property('Id_Tipo_Imposto');
      expect(diversas).to.have.property('Id_Tipo_Contribuinte');
      expect(diversas).to.have.property('Id_Situacao_Tributaria');
      expect(diversas).to.have.property('Id_Observacao_Fiscal');
      expect(diversas).to.have.property('Id_Codigo_Fiscal_Substituicao');
      expect(diversas).to.have.property('Percentual_Base');
      expect(diversas).to.have.property('Aliquota');
      expect(diversas).to.have.property('Base_Substituicao');
      expect(diversas).to.have.property('Aliquota_Substituicao');
      expect(diversas).to.have.property('Zerar_Livro');
      expect(diversas).to.have.property('Percentual_Diferido');
      expect(diversas).to.have.property('Somar_Substituicao_Nota');
      expect(diversas).to.have.property('Registra_Desconto_ICMS');
      expect(diversas).to.have.property('Valor_Minimo_Base');
      expect(diversas).to.have.property('UF');
      expect(diversas).to.have.property('Id_Usuario');
      expect(diversas).to.have.property('Data_Hora_Alteracao');
      expect(diversas).to.have.property('Percentual_Desconto_Nota');
      expect(diversas).to.have.property('Valor_Maximo_Base');
      expect(diversas).to.have.property('Imposto_Deduzir_IRPF');
      expect(diversas).to.have.property('Id_Base_Fiscal_Diversas');
      expect(diversas).to.have.property('Id_Observacao_Portaria_PPB');
      expect(diversas).to.have.property('Id_Natureza_Receita');
      expect(diversas).to.have.property('Chave_MD5');
      expect(diversas).to.have.property('Id_Tipo_Calculo_Diferimento');
      expect(diversas).to.have.property('Id_CNPJ_CPF');
      expect(diversas).to.have.property('Base_Substituicao_Sem_Reducao');
      expect(diversas).to.have.property('Id_Codigo_NBM_Subst');
      expect(diversas).to.have.property('Data_Inicial');
      expect(diversas).to.have.property('Aliquota_Importacao');
      expect(diversas).to.have.property('Teto_Maximo');
      expect(diversas).to.have.property('Somar_Frete_FOB_BaseST');
      expect(diversas).to.have.property('Nao_Somar_Substituicao_No_Custo_Entrada');
      expect(diversas).to.have.property('Aliquota_UF_Destino');
      expect(diversas).to.have.property('Percentual_Base_UF_Destino');
      expect(diversas).to.have.property('Percentual_Partilha_UF_Destino');
      expect(diversas).to.have.property('Id_Enquadramento_IPI');
      expect(diversas).to.have.property('Armazem_Geral');
      expect(diversas).to.have.property('Desoneracao');
      expect(diversas).to.have.property('Id_Motivo_Desoneracao');
      expect(diversas).to.have.property('Id_Situacao_Origem');
      expect(diversas).to.have.property('Percentual_Reducao_BaseST');
      expect(diversas).to.have.property('Percentual_Credito_Presumido');
      expect(diversas).to.have.property('Id_Consumo_Final');
      expect(diversas).to.have.property('Deducao_Base_Calculo_Impostos');
      expect(diversas).to.have.property('Id_Tipo_Calculo_Difal');
      expect(diversas).to.have.property('Area_Livre_Comercio');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_ICMS');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_ICMSST');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP_ST');
      expect(diversas).to.have.property('Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino');
      expect(diversas).to.have.property('Vlr_Ajuste_Igual_Vlr_Imposto');
      expect(diversas).to.have.property('Aliquota_FCP');
      expect(diversas).to.have.property('Aliquota_FCP_UF_Destino');
      expect(diversas).to.have.property('Aliquota_FCP_ST');
      expect(diversas).to.have.property('Deduzir_ICMS_BC');
      expect(diversas).to.have.property('Id_Tipo_Calculo_Difal_ST');
      expect(diversas).to.have.property('Aliquota_Interestadual');
      expect(diversas).to.have.property('Id_Tipo_Pessoa');
      expect(diversas).to.have.property('Id_Motivo_Restituicao_Complementacao_ICMS');
      expect(diversas).to.have.property('Id_Tipo_Remetente_Retencao');
      expect(diversas).to.have.property('Percentual_Deducao_ICMS_Proprio');
      expect(diversas).to.have.property('Somar_Frete_FOB_Base_ICMS');
      expect(diversas).to.have.property('Data_Final');
      expect(diversas).to.have.property('Deduzir_ICMS_ST_BC');
      expect(diversas).to.have.property('Deduzir_IPI_BC');
      expect(diversas).to.have.property('Deduzir_Difal_Base');
    });
  });
});