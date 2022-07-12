const cypress = require("cypress");

class LoginPage {

    get emailInput() {
        return cypress.get('#email')
    }
get passworInput() {
    return cypress.get('#password')
}

get submitButton() {
    return cypress.get('#button')
}
}

export const LoginPage = new LoginPage();
