const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_simples_estatisticas';
const Authorization = Cypress.env('API.PRAGMA');

const idpessoaSemEstatistica = "000000";
const idpessoaInvalido = "id_invalido";
const AUTHORIZATION_INVALID = Cypress.env('API.PRAGMA_INVALID');
const idpessoaValido = "12334";

describe('API rest - Cliente - GET /v3/cliente_simples_estatisticas/{idpessoa}', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200 e todas as propriedades de estatísticas do cliente simplificado', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idpessoaValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);

      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('data_ultima_compra');
      expect(ret).to.have.property('ticket_medio');
      expect(ret).to.have.property('media_atraso');
      expect(ret).to.have.property('total_em_aberto');
      expect(ret).to.have.property('numero_vezes');
      expect(ret).to.have.property('formas_pagamento_mais_usadas');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('idtipocarteiratitulo');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('descricao');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('percentual');
      expect(ret).to.have.property('ultimas_compras');
      expect(ret.ultimas_compras[0]).to.have.property('data_compra');
      expect(ret.ultimas_compras[0]).to.have.property('codigo_produto');
      expect(ret.ultimas_compras[0]).to.have.property('descricao_produto');
      expect(ret.ultimas_compras[0]).to.have.property('quantidade');
      expect(ret).to.have.property('cartao_fidelidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('idtipocartaofidelidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('descricao');
      expect(ret.cartao_fidelidade[0]).to.have.property('numerocartao');
      expect(ret.cartao_fidelidade[0]).to.have.property('diapagamento');
      expect(ret.cartao_fidelidade[0]).to.have.property('diascarencia');
      expect(ret.cartao_fidelidade[0]).to.have.property('emitecartao');
      expect(ret.cartao_fidelidade[0]).to.have.property('dataemissao');
      expect(ret.cartao_fidelidade[0]).to.have.property('dataentrega');
      expect(ret.cartao_fidelidade[0]).to.have.property('datavalidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('datacontato');
      expect(ret).to.have.property('titulo_renegociado');
      expect(ret).to.have.property('limite_credito');
      expect(ret).to.have.property('disponivel');
      expect(ret).to.have.property('receber_em_aberto');
      expect(ret).to.have.property('titulo_em_atraso');
      expect(ret).to.have.property('pedidos_nao_faturados');
      expect(ret).to.have.property('titulos_transf_pendente');
      expect(ret).to.have.property('titulos_pre_pago');
      expect(ret).to.have.property('titulos_abertos');
    });
  });

  it('Deve retornar 204 quando não houver estatísticas para o idpessoa informado', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idpessoaSemEstatistica}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 401 quando não autorizado', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/123456`,
      headers: { Authorization: AUTHORIZATION_INVALID },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('Deve retornar 412 para idpessoa inválido', () => {

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idpessoaInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});