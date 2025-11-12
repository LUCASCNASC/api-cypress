const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_anexo_delete';
const Authorization = Cypress.env('API.PRAGMA');
const idcnpj_cpfValido = "12312312312"; 
const idpessoaanexoValido = "123"; 

describe('API - Cliente - DELETE /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredentials: true } }, () => {

  const idcnpj_cpfInvalido = "cpf_invalido";
  const idpessoaanexoInvalido = "anexo_invalido";
  const idcnpj_cpfSemAnexo = "00000000000000";
  const idpessoaanexoSemAnexo = "000000";

  it('Deve retornar 200 ao excluir anexo válido', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfValido}/${idpessoaanexoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 204 ao tentar excluir anexo já inexistente', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfSemAnexo}/${idpessoaanexoSemAnexo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfInvalido}/${idpessoaanexoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});