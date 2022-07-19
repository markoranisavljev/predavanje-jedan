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
cy.intercept({
  method: 'POST',
  url: Cypress.env('API_BASE_URL' + '/auth/login')
}).as('validLogin')

    loginPage.login(validEmail, validPassword)
    cy.wait('@validLogin').then(interception =>{
      console.group(interception.response.statusCode);
      expect(interception.response.statusCode).eq(200);
    })
    cy.url().should('not.contains', '/login')
  })

  it('login with invalid credentials', () => {
    loginPage.login('rwerew', 'ewrqewq')
    cy.url().should('contains', '/login')
  })

})














