const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Logística/v3_get_logistica_lista_mapa_carga_loja_lote';
const Authorization = Cypress.env('API.PRAGMA');

const idFilial = "123123123";
const idMapaCargaLojaInicial = "123123123";
const idMapaCargaLojaFinal = "123123123";

describe('API rest - Logística - GET - /Logística/v3_get_logistica_lista_mapa_carga_loja_lote', { env: { hideCredendials: true } }, () => {

  it('Status Code: 200', () => {
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${idFilial}/${idMapaCargaLojaInicial}/${idMapaCargaLojaFinal}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaomapacarga');
        expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
        expect(resposta.body.retorno[0]).toHaveProperty('datainicial');
        expect(resposta.body.retorno[0]).toHaveProperty('maximokg');
        expect(resposta.body.retorno[0]).toHaveProperty('maximom3');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdecliente');
        expect(resposta.body.retorno[0]).toHaveProperty('qtdepedido');
        expect(resposta.body.retorno[0]).toHaveProperty('idusuariocoletando');
        expect(resposta.body.retorno[0]).toHaveProperty('idmotorista');
        expect(resposta.body.retorno[0]).toHaveProperty('idveiculo');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilialafaturar');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idpedidovenda');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('iditembase');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idproduto');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradex');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradey');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('quantidade');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('totalitem');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idsituacaopedidovenda');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('iditembasereferentekit');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('composicaokit');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('previsaofaturamento');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('pesokg');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('volumem3');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgruporota');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idrota');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idrotacidade');
        expect(resposta.body.retorno[0].carga[0]).toHaveProperty('ordementrega');
      });
  });
});