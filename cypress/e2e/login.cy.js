/// <reference types ="Cypress" />

const locators = require('../fixtures/locators.json')

describe ('gallery app', () => {
it('login withot "@" in email', () => {
  cy.visit('https://gallery-app.vivifyideas.com/');
  cy.get('.nav-link').eq(1).click();
  cy.url().should('include', '/login');
  cy.get(locators.login.emailInput).type('marko.ranisavljev91gmail.com');
  cy.get(locators.login.passwordInput).type('miholjdan1991')
  cy.get('button').click();
})

it('login withot email', () => {
  cy.visit('https://gallery-app.vivifyideas.com/');
  cy.get('.nav-link').eq(1).click();
  cy.url().should('include', '/login');
  cy.get('#email').type(' ');
  cy.get('#password').type('miholjdan');
  cy.get('button').click();
})

it('login withot password', () => {
  cy.visit('https://gallery-app.vivifyideas.com/');
  cy.get('.nav-link').eq(1).click();
  cy.url().should('include', '/login');
  cy.get('#email').type('marko.ranisavljev91gmail.com');
  cy.get('#password').type(' ');
  cy.get('button').click();
})


  it('login with valid credentials', () => {
    cy.visit('https://gallery-app.vivifyideas.com/');
    cy.get('.nav-link').eq(1).click();
    cy.url().should('include', 'login');
    cy.get('#email').type('marko.ranisavljev91@gmail.com');
    cy.get('#password').type('miholjdan1991');
    cy.get('button').click();
    cy.url().should('not.include', 'login');
  })

  it('logout test', () => {
cy.get('.nav-link').should('have.length', 4)
    cy.get('.nav-link').eq(3).click();
  })

})

