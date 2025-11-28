const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/LGPD/v3_get_lgpd_dados_titular';
const Authorization = Cypress.env('API.PRAGMA');

const cpf = "123123123";

describe('API rest - LGPD - GET - /v3/dados_titular/{cpf}', { env: { hideCredendials: true } } , () => {
  
  it('Status Code 200', () => {
    
    cy.api({
      method: 'GET', 
      url: `${BASE_URL}/${PATH_API}/${cpf}`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000); 
        expect(resposta.body.retorno[0].titular[0]).toHaveProperty('identificacao');
        expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('nome');
        expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('titulo');
        expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('valor');
        expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('titulo');
      });
  });
});