/// <reference types="cypress"/>

import { LoginPage } from "./login_1.cy.js"
const loginPage = new LoginPage
describe("Collection_ Peak_ Short", () => {
it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
   
    //Pin Page
    //cy.get('.form_wrap').click()
    //cy.wait(2000)
 
    
  //Enter Pin
  cy.wait(2000);
  // enter the pin 
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)
   
  //click on comet icon
   cy.wait(500) 
   cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
   .click({timeout:3000});  
 
   
   //cy.get('.continue_button_wrap > p').click()
   

  //Click on Partner
  cy.wait(4000)
  cy.get('#PartnerDropdown').click({ force: true })
  

  // tag: smoke

  //Click on Collection
  cy.get('[href="#/collection"]').click()
 

  // //Select Category
  // cy.wait(3000)
  // cy.get('.k-input-value-text').click()
  // cy.get('select')
 

  // cy.get('.k-input-value-text').click()
  // .type("{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{Enter}")
  
    //Select Category
    cy.get('.k-input-value-text').click()
    //cy.get('.k-list-item ng-star-inserted').select('index','2')
    cy.wait(500)
    cy.contains('span','Peak Short Report').click();

  //Click on Submit Button
  cy.get('.col-md-3 > .btn').click()
 
  //cy.wait(10000)
  if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    {
      cy.log('data found')
      // downloading Excel File 
      
       //Download Excel
cy.wait(12000)
     // cy.get('.btn > .ng-star-inserted').click()
        
    }
    else
    {
      cy.log('No data found')
    }
   // Scrolling to top
     cy.scrollTo('top')
       // logout
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1000)
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)

})
})
