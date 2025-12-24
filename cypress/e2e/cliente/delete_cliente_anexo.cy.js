const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/Cliente/v3_cliente_anexo_delete';
const Authorization = Cypress.env('API.PRAGMA');

const idcnpj_cpfInvalido = Cypress.env('ID_CNPJ_CPF_INVALIDO');
const idpessoaanexoInvalido = Cypress.env('ID_PESSOA_ANEXO_INVALIDO');
const idcnpj_cpfSemAnexo = Cypress.env('ID_CNPJ_CPF_SEM_ANEXO');
const idpessoaanexoSemAnexo = Cypress.env('ID_PESSOA_ANEXO_SEM_ANEXO');
const idcnpj_cpfValido = Cypress.env('ID_CNPJ_CPF_VALIDO');
const idpessoaanexoValido = Cypress.env('ID_PESSOA_ANEXO_VALIDO');

describe('API rest - Cliente - DELETE /Cliente/v3_cliente_anexo_delete', { env: { hideCredentials: true } }, () => {

  it('Status Code is 200', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH}/${idcnpj_cpfValido}/${idpessoaanexoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 204', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH}/${idcnpj_cpfSemAnexo}/${idpessoaanexoSemAnexo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Status Code is 412', () => {

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH}/${idcnpj_cpfInvalido}/${idpessoaanexoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});