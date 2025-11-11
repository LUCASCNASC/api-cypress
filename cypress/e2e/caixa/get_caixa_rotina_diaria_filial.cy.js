const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/v3/caixa_rotina_diaria_filial';
const Authorization = Cypress.env('API.PRAGMA');
const idFilialValido = Cypress.env('ID_FILIAL_VALIDO');
const dataAberturaValida = Cypress.env('DATA_ABERTUTA_VALIDA');

describe('API - Caixa Rotina Diária Filial', { env: { hideCredentials: true } }, () => {

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
    const idFilialSemDados = 99999; // Use um ID de filial que não há rotina para a data
    const dataSemMovimentacao = "2099-01-01"; // Data futura para garantir ausência de dados

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
    const idFilialInvalido = 'abc'; // ID inválido propositalmente
    const dataAberturaInvalida = 'data_invalida';

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