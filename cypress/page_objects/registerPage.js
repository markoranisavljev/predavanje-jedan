/// <reference types="Cypress" /> 

class RegisterPage {

    get firstNameInput() {
        return cy.get('#first-name')
    }

    get lastNameInput() {
        return cy.get('#last-name')
    }

    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get passwordConfirmationInput() {
        return cy.get('#password-confirmation')
    }

    get checkbox() {
        return cy.get(':checkbox')
    }

    get submitButton() {
        return cy.get('button')
    }

    registerWithInvalidEmail(firstName, lastName, invalidEmail, password) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(invalidEmail)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(password)
        this.checkbox.check()
        this.submitButton.click()
    }

    registerWhenPasswordsDontMatch(firstName, lastName, invalidEmail, password, wrongPassword) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(invalidEmail)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(wrongPassword)
        this.checkbox.check()
        this.submitButton.click()
    }
    registerWithShortPassword(firstName, lastName, validEmail, shortPassword) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(validEmail)
        this.passwordInput.type(shortPassword)
        this.passwordConfirmationInput.type(shortPassword)
        this.checkbox.check()
        this.submitButton.click()
    }
    registerWithNoNumberInPassword(firstName, lastName, invalidEmail, noNumberPassword) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(invalidEmail)
        this.passwordInput.type(noNumberPassword)
        this.passwordConfirmationInput.type(noNumberPassword)
        this.checkbox.check()
        this.submitButton.click()
    }

}

export const registerPage = new RegisterPage();