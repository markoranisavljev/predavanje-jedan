const cypress = require("cypress");

class RegisterPage {
    get firstNameInput() {
        return cypress.get('#first-name')
    }

    get lastNameInput() {
        return cypress.get('#last-name')
    }

    get emailInput() {
        return cypress.get('#email')
    }
get passworInput() {
    return cypress.get('#password')
}

get passworConfirmationInput() {
    return cypress.get('#password-confirmation')
}

get checkbox() {
    return cypress.get(':checkboxS')
}

get submitButton() {
    return cypress.get('#button')
}
}

export const RegisterPage = new RegisterPage();