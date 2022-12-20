class WirisHomePage {
    getLanguageField() {
        return cy.get('#languageDropdown');
    }

    getSpanishLanguageLink() {
        return cy.get('a[href*="/es"]')
    }

    getContactUsButton() {
        return cy.get('');
    }

    getNameField() {
        return cy.get('')
    }

    getLastNameField() {
        return cy.get('');
    }

    getEmailField() {
        return cy.get('')
    }

    getPhoneDropdown() {
        return cy.get('');
    }

    getSpanishLanguagePrefix() {
        return cy.get('')
    }

    getPhoneField() {
        return cy.get('')
    }

    getOrganizationField() {
        return cy.get('')
    }

    getNameField() {
        return cy.get('')
    }

    getMessageField() {
        return cy.get('')
    }

    getTermsCheckbox() {
        return cy.get('')
    }

    getSendButton() {
        return cy.get('')
    }

    getNameError() {
        return cy.get('')
    }
}

export default WirisHomePage;