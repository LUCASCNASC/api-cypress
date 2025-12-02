const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_anexo';
const Authorization = Cypress.env('API.PRAGMA');

const idcnpj_cpfSemAnexo = Cypress.env('ID_CNPJ_CPF_SEM_ANEXO');
const idcnpj_cpfInvalido = Cypress.env('ID_CNPJ_CPF_INVALIDO');
const idcnpj_cpfValido = "100002139114930";

describe('API rest - Cliente - GET /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredentials: true } }, () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.retorno[0]).to.have.property('idcnpj_cpf');
      const anexo = response.body.retorno[0].anexo[0];
      expect(anexo).to.have.property('idtipoanexo');
      expect(anexo).to.have.property('idpessoaanexo');
      expect(anexo).to.have.property('descricao');
      expect(anexo).to.have.property('arquivo');
      expect(anexo).to.have.property('datamovimento');
    });
  });

  it('Deve retornar 204 quando não houver anexos para o idcnpj_cpf informado', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfSemAnexo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para idcnpj_cpf inválido', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});