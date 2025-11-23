const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - PUT /v3/agencia', { env: { hideCredentials: true } }, () => {
  
  it('Deve retornar 201 e as propriedades da agência alterada', () => {

    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: 1,
        codigoAgencia: 999,
        nome: "Nova Agência",
        endereco: "Rua Nova, 100"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigoBanco');
      expect(ret).to.have.property('codigoAgencia');
    });
  });

  it('Deve retornar 500 ao tentar alterar agência com payload inválido', () => {

    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        codigoBanco: null,
        codigoAgencia: null,
        nome: null,
        endereco: null
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});