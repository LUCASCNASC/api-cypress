const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_lista_solicitacao_processamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', { env: { hideCredendials: true } }, () => {

  it('Status Code 200 e as propriedades da lista de solicitações de processamento', () => {
    
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Data_Inicial": "2024-01-01",
        "Data_Final": "2024-01-31"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('ID_Filial');
      expect(ret).to.have.property('ID_Processamento');
      expect(ret).to.have.property('Data_Processamento');
      expect(ret).to.have.property('Tipo_Processamento');
      expect(ret).to.have.property('Situacao_Processamento');
      expect(ret).to.have.property('Data_Agendamento');
      expect(ret).to.have.property('Inicio_Processamento');
      expect(ret).to.have.property('Fim_Processamento');
      expect(ret).to.have.property('Mensagem_Falha');
    });
  });
});