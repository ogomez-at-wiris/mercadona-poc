class MercadonaHomePage {
    getPostalCodeEditField() {
        return cy.get('#root > header > div > div > form > div > input[type=text]');
    }

    getSubmitButton() {
        return cy.get('#root > header > div > div > form > input');
    }
}

export default MercadonaHomePage;
