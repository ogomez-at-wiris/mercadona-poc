import WirisHomePage from '../support/pages/wiris_homepage.js'

const homepage = new WirisHomePage();

describe('example to-do app', () => {
  beforeEach(() => {
    cy.acceptCookies();
    cy.visit('https://www.wiris.com/')
  })

  it('fills all fields but one and checks if it shows an error', () => {
    homepage.getContactUsButton()
    homepage.getNameField()
    homepage.getLastNameField()
    homepage.getEmailField()
    homepage.getPhoneDropdown()
    homepage.getSpanishLanguagePrefix()
    homepage.getPhoneField()
    homepage.getOrganizationField()
    homepage.getNameField()
    homepage.getMessageField()
    homepage.getTermsCheckbox()
    homepage.getSendButton()
    homepage.getNameError()
  })
})