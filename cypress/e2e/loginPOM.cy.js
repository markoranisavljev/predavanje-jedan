/// <reference types="Cypress" />
import { loginPage } from '../page_objects/loginPage';


describe('login test', () => {
  const validEmail = 'filip.nedovic@vivifyideas.com';
  const validPassword = 'Test12345';

  beforeEach('visit login page', () => {
    cy.visit('/login')
    cy.url().should('contains', '/login')
     loginPage.loginPageHeading.should('be.visible')
     loginPage.loginPageHeading.should('have.text', 'Please login')
      cy.get('input').should('have.length', 2)
  })

  it.only('login with valid credentials', () => {
    loginPage.login(validEmail, validPassword)
    cy.url().should('not.contains', '/login')
  })

  it.only('login with invalid credentials', () => {
    loginPage.login('rwerew', 'ewrqewq')
    cy.url().should('contains', '/login')
    loginPage.errorMessage.should('be.visible')
    loginPage.errorMessage.should('exist')
    loginPage.errorMessage.should('have.text', 'Bad credentials')
    loginPage.errorMessage.should('have.css','background-color', 'rgb(248,215,218)')
  })

})














