class WirisHomePage {
    getLanguageField() {
        return cy.get('#languageDropdown');
    }

    getSpanishLanguageLink() {
        return cy.get('a[href*="/es"]')
    }
}

export default WirisHomePage;