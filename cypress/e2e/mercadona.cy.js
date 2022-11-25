import MercadonaHomePage from '../support/pages/mercadona_homepage.js'

const homepage = new MercadonaHomePage();

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadona.es')
  })

  it('correctly enters a postcode and clicks the continue button', () => {
    cy.fixture('purchase.json').as('userData');
    homepage.getPostalCodeEditField().type(cy.get('userData').purchaseUser);
    homepage.getSubmitButton().click()
  })
})
