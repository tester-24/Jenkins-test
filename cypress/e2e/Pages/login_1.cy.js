export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.wait(1500)
        cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').clear()
        .type('1126')
                   
        //click on continue button
        cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
    }

    enterPassword() {
        cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('J@inam$789')
    }

    clickLogin() {
        cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
    }
}
