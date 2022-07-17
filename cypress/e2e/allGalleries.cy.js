import { allGalleriesPage } from "../page_objects/allGalleriesPage.js";
import { loginPage } from "../page_objects/loginPage"

describe ('all galleries page test', () => {
    let validEmail = 'marko.ranisavljev91test@gmail.com'
    let validPassword = 'miholjdan1991'

    beforeEach(() => {
        cy.visit('./login')
        loginPage.login(validEmail, validPassword)
        cy.url().should('not.include', '/login')
})

    it('confirm that the page loaded', () => {
        allGalleriesPage.allGalleriesHeading.should('be.visible')
        .and('have.text', 'All Galleries')
        allGalleriesPage.galleryCard.should('have.length', 10)
})

it('test pagination', () => {
    allGalleriesPage.galleryCard.should('have.length', 10)
    allGalleriesPage.loadMoreButton.click()
    allGalleriesPage.galleryCard.should('have.length', 20)
})

})