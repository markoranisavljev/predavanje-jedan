

it('login via BE', () => {
    cy.visit('/');
    cy.loginViaBackend();
    cy.visit('/');
    
    })

