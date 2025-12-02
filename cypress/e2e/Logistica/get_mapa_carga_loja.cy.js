const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_get_logistica_lista_mapa_carga_loja';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idSituacaoMapaCarga = "123123123";
const dataInicial = "123123123"; 
const dataFinal = "123123123"; 

describe('API rest - Logística - GET - /v3/mapa_carga_loja/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal}', { env: { hideCredendials: true } } , () => {

  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${idFilial}/${idSituacaoMapaCarga}/${dataInicial}/${dataFinal}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idfilialorigem');
        expect(resposta.body.retorno[0]).toHaveProperty('idmapacargaloja');
        expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
        expect(resposta.body.retorno[0]).toHaveProperty('totalkg');
        expect(resposta.body.retorno[0]).toHaveProperty('totalm3');
        expect(resposta.body.retorno[0]).toHaveProperty('totalvalor');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdeitens');
        expect(resposta.body.retorno[0]).toHaveProperty('idfilialdestino');
        expect(resposta.body.retorno[0]).toHaveProperty('dataprevisaoentrega');
        expect(resposta.body.retorno[0]).toHaveProperty('idusuariocoletando');
        expect(resposta.body.retorno[0]).toHaveProperty('idveiculo');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idpedidoloja');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idsituacaopedidoloja');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('descricaosituacaopedidoloja');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idproduto');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradex');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradey');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('datainclusao');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('databaixa');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idtipourgenciareserva');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('descricaotipourgenciareserva');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('observacao');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idusuario');
      });
  });
});