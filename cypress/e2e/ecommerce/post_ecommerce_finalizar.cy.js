const BASE_URL = Cypress.env('BASE_URL');
const PATH = '/E-commerce/v3_ecommerce_finalizar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API rest - E-commerce - POST /E-commerce/v3_ecommerce_finalizar', { env: { hideCredentials: true } }, () => {
  
  it('Status Code is 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        cliente: "12345678901",
        produtos: [
          {
            codigo: "P001",
            quantidade: 2,
            valor_unitario: 100.00
          }
        ],
        pagamento: {
          forma: "cartao",
          valor: 200.00
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Status Code is 412', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        cliente: "",
        produtos: [],
        pagamento: {}
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});