export class LoginPage {

    enterUsername() {
     //Enter the userid
  cy.wait(2500)
  cy.xpath('/html[1]/body[1]/app-root[1]/app-sign-in[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/kendo-textbox[1]/input[1]').type('M3903')
  
  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
        
    }

    enterPassword() {
        // enter password
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Nirav@789')
        
    }

    clickLogin() {
        //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
  
    }
}
