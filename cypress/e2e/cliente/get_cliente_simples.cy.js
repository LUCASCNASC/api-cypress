const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_simples_get';
const Authorization = Cypress.env('API.PRAGMA');

const clienteSemDados = "00000000000000";
const clienteValido = "12345678901234";

describe('API - Cliente - GET /v3/cliente_simples/{cliente}', { env: { hideCredentials: true } }, () => {

  it('Status Code 200 e propriedades do cliente simplificado', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idcnpj_cpf');
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('nomefantasia');
      expect(ret).to.have.property('data_criacao');
      expect(ret).to.have.property('cce_rg');
      expect(ret).to.have.property('orgao_emissor');
      expect(ret).to.have.property('data_emissao');
      expect(ret).to.have.property('email');
      expect(ret).to.have.property('emailnfe');
      expect(ret).to.have.property('telefone_ddd');
      expect(ret).to.have.property('telefone_numero');
      expect(ret).to.have.property('celular_ddd');
      expect(ret).to.have.property('celular_numero');
      expect(ret).to.have.property('endereco');
      expect(ret.endereco[0]).to.have.property('rua');
      expect(ret.endereco[0]).to.have.property('numero');
      expect(ret.endereco[0]).to.have.property('complemento');
      expect(ret.endereco[0]).to.have.property('bairro');
      expect(ret.endereco[0]).to.have.property('cep');
      expect(ret.endereco[0]).to.have.property('idtipoendereco');
      expect(ret.endereco[0]).to.have.property('cidade');
      expect(ret.endereco[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.endereco[0].cidade[0]).to.have.property('string');
      expect(ret).to.have.property('rota');
      expect(ret.rota[0]).to.have.property('idrota');
      expect(ret.rota[0]).to.have.property('local_entrega');
      expect(ret.local_entrega[0]).to.have.property('codigo');
      expect(ret.local_entrega[0]).to.have.property('cidade');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.local_entrega[0].cidade[0]).to.have.property('cidade_nome');
      expect(ret).to.have.property('fiador');
      expect(ret.fiador[0]).to.have.property('idcnpj_cpf');
      expect(ret.fiador[0]).to.have.property('cnpj_cpf');
      expect(ret.fiador[0]).to.have.property('nome');
      expect(ret).to.have.property('cartaofidelidade');
      expect(ret.cartaofidelidade[0]).to.have.property('numerocarcao');
      expect(ret.cartaofidelidade[0]).to.have.property('datavalidade');
      expect(ret.cartaofidelidade[0]).to.have.property('tipocartao');
    });
  });

  it('Deve retornar 204 quando não houver dados para o cliente simplificado', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});