describe('registration test', () => {

    it('registar without any credentials', () => {
        cy.visit('/register')
        cy.get('#first-name').type(' ')
        cy.get('#last-name').type(' ')
        cy.get('#email').type(' ')
        cy.get('#password').type(' ')
        cy.get('#password-confirmation').type(' ')
        cy.get(':checkbox').check()
        cy.get('button').click();
            })

    it('registar without email', () => {
                cy.visit('/register')
                cy.get('#first-name').type('Marko')
                cy.get('#last-name').type('Markovic')
                cy.get('#email').type(' ')
                cy.get('#password').type('miholjdan12345')
                cy.get('#password-confirmation').type('miholjdan12345')
                cy.get(':checkbox').check()
                cy.get('button').click();
                    }) 
                    
    it('registar without password', () => {
                        cy.visit('/register')
                        cy.get('#first-name').type('Marko')
                        cy.get('#last-name').type('Markovic')
                        cy.get('#email').type('marko@gmail.com ')
                        cy.get('#password').type(' ')
                        cy.get('#password-confirmation').type('miholjdan12345')
                        cy.get(':checkbox').check()
                        cy.get('button').click();
                            }) 

    it('registar without password-confirmation', () => {
                                cy.visit('/register')
                                cy.get('#first-name').type('Marko')
                                cy.get('#last-name').type('Markovic')
                                cy.get('#email').type('marko@gmail.com')
                                cy.get('#password').type('miholjdan123456')
                                cy.get('#password-confirmation').type(' ')
                                cy.get(':checkbox').check()
                                cy.get('button').click();
                                    }) 

    it('without check clicked', () => {
                                        cy.visit('/register')
                                        cy.get('#first-name').type('Marko')
                                        cy.get('#last-name').type('Markovic')
                                        cy.get('#email').type('marko@gmail.com')
                                        cy.get('#password').type('miholjdan123456')
                                        cy.get('#password-confirmation').type('miholjdan123456')
                                        cy.get('button').click();
                                            }) 

                                            it('no "@" in email', () => {
                                                cy.visit('/register')
                                                cy.get('#first-name').type('Marko')
                                                cy.get('#last-name').type('Markovic')
                                                cy.get('#email').type('markogmail.com')
                                                cy.get('#password').type('miholjdan123456')
                                                cy.get('#password-confirmation').type('miholjdan123456')
                                                cy.get(':checkbox').check()
                                                cy.get('button').click();
                                                    })                  



    xit('registar with valid data', () => {
cy.visit('/register')
cy.get('#first-name').type('Pera')
cy.get('#last-name').type('Peric')
cy.get('#email').type('test12345@test.com')
cy.get('#password').type('sifra12345')
cy.get('#password-confirmation').type('sifra12345')
cy.get(':checkbox').check()
cy.get('button').click();
cy.url().should('not.include', '/register');
    })
})