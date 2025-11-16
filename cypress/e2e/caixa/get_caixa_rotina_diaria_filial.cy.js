const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/v3/caixa_rotina_diaria_filial';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Caixa Rotina Diária Filial', { env: { hideCredentials: true } }, () => {

  const idFilialSemDados = 99999;
  const dataSemMovimentacao = "2099-01-01";
  const idFilialInvalido = 'abc';
  const dataAberturaInvalida = 'data_invalida';
  const idFilialValido = Cypress.env('ID_FILIAL_VALIDO');
  const dataAberturaValida = Cypress.env('DATA_ABERTURA_VALIDA');

  it('Deve retornar 200 e responder rapidamente para uma filial e data válidas', () => {
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