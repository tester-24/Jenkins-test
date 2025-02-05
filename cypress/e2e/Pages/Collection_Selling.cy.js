/// <reference types="cypress"/>

import { LoginPage } from "./login_1.cy.js"
const loginPage = new LoginPage
describe("Collection_ Selling", () => {
it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
   
    //Pin Pag
    //cy.get('.form_wrap').click()
   
  //Enter Pin
  cy.wait(2000)
  // enter the pin 
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)

  //  //click on comet icon
  //  cy.wait(500) 
  //  cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
  //  .click({timeout:3000});  
  //Click on Partner
  cy.wait(4000)
  cy.get('#PartnerDropdown').click({ force: true })
 
  
  //Click on Collection
  cy.get('[href="#/collection"]').click()
  
 
   //Select Category
   cy.get('.k-input-value-text').click()
   //cy.get('.k-list-item ng-star-inserted').select('index','2')
   cy.wait(500)
   cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()  
  // cy.contains('span','Selling').click();

   //Click on Submit Button
   cy.get('.col-md-3 > .btn').click({ force: true },{timeout:90000})

   
  //  cy.get('.la-ball-spin-clockwise-fade').then(() => {
  //   // Continue with the next code after data is loaded
    
  //   cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0)
  // })

  // cy.waitUntil(() => {
  //   return cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('be.visible');
  // }, {
  //   timeout: 30000000,
  //   interval: 500000
  // });
   
  
  if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
   {
      cy.log('data found')
      // downloading Excel File
     
      
       //Download Excel
       cy.wait(120000)
       //cy.get('.btn > .ng-star-inserted').click({ force: true })
        //cy.wait(3000)
    
    }
     else
    {
      cy.log('No data found')

      }
   // Scrolling to top
    // cy.wait(2000)
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
