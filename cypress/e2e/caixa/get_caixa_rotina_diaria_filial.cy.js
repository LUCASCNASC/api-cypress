const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/v3/caixa_rotina_diaria_filial';
const Authorization = Cypress.env('API.PRAGMA');
 
const idFilialSemDados = Cypress.env('ID_FILIAL_SEM_DADOS');
const idFilialValido = Cypress.env('ID_FILIAL_VALIDO');
const dataAberturaValida = Cypress.env('DATA_ABERTURA_VALIDA');
const dataSemMovimentacao = Cypress.env('DATA_SEM_MOVIMENTACAO');
const idFilialInvalido = Cypress.env('ID_FILIAL_INVALIDO');
const dataAberturaInvalida = Cypress.env('DATA_ABERTURA_INVALIDA');

describe('API rest - Caixa - Caixa Rotina Diária Filial', { env: { hideCredentials: true } }, () => {

  it('Status Code 200', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialValido}/${dataAberturaValida}`,
      headers: { Authorization }
    }).should((response) => {
      expect(response.status, 'Status code deve ser 200').to.equal(200);
      expect(response.duration, 'Tempo de resposta deve ser < 2s').to.be.lessThan(2000);
      
    });
  });

  it('Deve retornar 204 quando não houver dados para a filial/data informados', () => {
    
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialSemDados}/${dataSemMovimentacao}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status code deve ser 204').to.equal(204);
      expect(response.body, 'Corpo deve ser vazio').to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros que não atendem aos pré-requisitos', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialInvalido}/${dataAberturaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status code deve ser 412').to.equal(412);
      // Dependendo da API, valide mensagem de erro aqui
      expect(response.body).to.exist;
    });
  });
});