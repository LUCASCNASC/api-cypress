const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_regra_fiscal_uf_get';
const Authorization = Cypress.env('API.PRAGMA');

const UFOrigem = "123123123";
const OrigemProduto = "123123123"; 

describe('API rest - Fisco/Contábil - GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto}', { env: { hideCredendials: true } }, () => {

  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${UFOrigem}/${OrigemProduto}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('UF_Origem');
      expect(ret).to.have.property('UF_Destino');
      expect(ret).to.have.property('Id_Tipo_Imposto');
      expect(ret).to.have.property('Percentual_Base');
      expect(ret).to.have.property('Zerar_Livro');
      expect(ret).to.have.property('Percentual_Diferido');
      expect(ret).to.have.property('Id_Usuario');
      expect(ret).to.have.property('Data_Hora_Alteracao');
      expect(ret).to.have.property('Id_Base_Fiscal_UF');
      expect(ret).to.have.property('Id_Empresa');
      expect(ret).to.have.property('Data_Inicial');
      expect(ret).to.have.property('Desoneracao');
      expect(ret).to.have.property('Id_Motivo_Desoneracao');
      expect(ret).to.have.property('Id_Situacao_Origem');
      expect(ret).to.have.property('Id_Situacao_Tributaria');
      expect(ret).to.have.property('Id_Tipo_Pessoa');
      expect(ret).to.have.property('Id_Tipo_Calculo_Diferimento');
      expect(ret).to.have.property('Data_Final');
    });
  });
});