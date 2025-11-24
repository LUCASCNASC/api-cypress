const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Pagamento%20divida/v2_divida_cliente';
const Authorization = Cypress.env('API.PRAGMA');

const filial = "12345678910";
const cliente = "12345678910";

describe('Pagamento divida - GET - /v3/divida_cliente/{filial}/{cliente}', { env: { hideCredendials: true } }, () => {

  it('Resposta 200', () => {

    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${filial}/${cliente}`, 
      headers: { Authorization },
      
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
        expect(resposta.body.retorno[0]).toHaveProperty('idtitulo');
        expect(resposta.body.retorno[0]).toHaveProperty('idparcelatitulo');
        expect(resposta.body.retorno[0]).toHaveProperty('idparcialtitulo');
        expect(resposta.body.retorno[0]).toHaveProperty('datavencimento');
        expect(resposta.body.retorno[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0]).toHaveProperty('valor_principal');
        expect(resposta.body.retorno[0]).toHaveProperty('idfilial_vinculado');
        expect(resposta.body.retorno[0]).toHaveProperty('idtitulo_vinculado');
        expect(resposta.body.retorno[0]).toHaveProperty('idparcela_vinculado');
        expect(resposta.body.retorno[0]).toHaveProperty('idparcial_vinculado');
        expect(resposta.body.retorno[0]).toHaveProperty('valor_vinculado');
      });
  });
});