const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_post_mapa_carga_acarregar_itens';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - Logística - POST - /Logística/v3_post_mapa_carga_acarregar_itens', { env: { hideCredendials: true } }, () => {

  it('Status Code is 200', () => {
    cy.api({
      method: 'POST', 
      url: `${BASE_URL}/${PATH_API}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0]).toHaveProperty('iditembase');
        expect(resposta.body.retorno[0]).toHaveProperty('idpedidoloja');
        expect(resposta.body.retorno[0]).toHaveProperty('filialdetalhe');
        expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
        expect(resposta.body.retorno[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('tipomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('idproduto');
        expect(resposta.body.retorno[0]).toHaveProperty('idcodigobarra');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdeitembase');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdecoletado');
        expect(resposta.body.retorno[0]).toHaveProperty('numerovolume');
        expect(resposta.body.retorno[0]).toHaveProperty('multiplicadorvolume');
        expect(resposta.body.retorno[0]).toHaveProperty('idfilialitembase');
        expect(resposta.body.retorno[0]).toHaveProperty('idagrupadorkit');
      });
  });
});