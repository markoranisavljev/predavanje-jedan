/// reference types="Cypress" />
import { registerPage } from '../page_objects/registerPage'

describe('register test', () => {
    beforeEach('visit register page', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
    })

    it('register with invalid email', () => {
        registerPage.registerWithInvalidEmail(
            'ime', 
            'prezime', 
            'mail@com', 
            'Test12345', 
            'Test12345'
            )
        registerPage.errorMessage.should('exist')
            .and('be.visible')
            .and('have.text', 'The email must be a valid email address.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.class', 'alert-danger')
        cy.url().should('include', '/register');
    })

    it('register with short password', () => {
        registerPage.registerWithShortPassword(
            'ime', 
            'prezime', 
            'mail@mail.com', 
            'test', 
            'test'
        )
        registerPage.errorMessage.should('exist')
            .and('be.visible')
            .and('have.text', 'The password must be at least 8 characters.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.class', 'alert-danger')
        cy.url().should('include', '/register');
    })

    it('register with no number in password', () => {
        registerPage.registerWithNoNumberInPassword(
            'ime', 
            'prezime', 
            'mail@mail.com', 
            'TestTestTest', 
            'TestTestTest'
        )
        registerPage.errorMessage.should('exist')
            .and('be.visible')
            .and('have.text', 'The password format is invalid.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.class', 'alert-danger')
        cy.url().should('include', '/register');
    })

    it.only('register when password confirmation don\'t match', () => {
        registerPage.registerWhenPasswordsDontMatch(
            'ime', 
            'prezime', 
            'mail@mail.com', 
            'Test12345', 
            'Test123456'
        )
        registerPage.errorMessage.should('exist')
            .and('be.visible')
            .and('have.text', 'The password confirmation does not match.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.class', 'alert-danger')
        cy.url().should('include', '/register');
    })

})













