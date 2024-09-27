export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.wait(1000)
        cy.get('.userid_wrap > .input_wrap > .text_form').type('M3903')
        
    }

    enterPassword() {
        cy.get('#LoginPassword').type('Nirav@789')
        
    }

    clickLogin() {
        cy.xpath("//p[normalize-space()='Login Now']").click({ force: true });
    }
}
