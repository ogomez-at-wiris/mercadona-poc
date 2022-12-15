import WirisHomePage from '../support/pages/wiris_homepage.js'

const homepage = new WirisHomePage();

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.wiris.com/')
  })

  it('changes the page to spanish and checks if it is actually spanish', () => {
    homepage.getLanguageField().click()
  })
})
