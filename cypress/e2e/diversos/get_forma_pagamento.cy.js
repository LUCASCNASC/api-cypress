const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_forma_pagamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Diversos - GET /v3/forma_pagamento', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idformapagamento');
      expect(ret).to.have.property('descricao');
    });
  });

  it.skip('Deve retornar 204 quando não houver formas de pagamento cadastradas', () => {
    // Se o endpoint não aceita parâmetro, simule um cenário de ambiente sem formas cadastradas, se possível
    // Caso não seja aplicável, este teste pode ser omitido.
  });

  it.skip('Deve retornar 412 se houver erro de pré-requisito', () => {
    // Não aplicável se o endpoint não exige parâmetros obrigatórios, mas pode ser incluído para cobrir cenários de erro.
  });
});