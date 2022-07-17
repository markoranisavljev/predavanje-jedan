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

  it('login with valid credentials', () => {
    loginPage.login(validEmail, validPassword)
    cy.url().should('not.contains', '/login')
  })

  it('login with invalid credentials', () => {
    loginPage.login('rwerew', 'ewrqewq')
    cy.url().should('contains', '/login')
  })

})














