/// <reference types="cypress"/>

import { text } from "body-parser"
import { LoginPage } from "./login_1.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    

    //Pin Page    
    //cy.get('.form_wrap').click()
   
 
  //Enter Pin
  cy.wait(2000);
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  
   
   
   //cy.get('.continue_button_wrap > p').click()
   //cy.wait(6000)

  //Click on Partner
  cy.wait(4000)
  cy.get('#PartnerDropdown').should('be.visible')
  cy.get('#PartnerDropdown').click({ force: true })
 // cy.wait(3000)

  // tag: smoke

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  

  //Select Category
  cy.wait(2000) 
  cy.get('.k-input-value-text').click()
  cy.get('select')
 

  cy.get('.k-input-value-text').click()
  .type("{downArrow}{downArrow}{Enter}")
 
   

  //Click on Submit Button
  //cy.get('.col-md-3 > .btn').click()
  cy.get('.col-md-3 > .btn').should('be.visible')
  cy.get('.col-md-3 > .btn').click()
 // cy.get(':nth-child(1) > .text-disable-drag').contains(text,' Last Updated on :')
//  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/app-collection[1]/div[4]/div[1]/div[1]/div[1]/label[1]').then(() => {
    // Continue with the next code after data is loaded
   // cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',1)
  
//})
 
 

 if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    {
      cy.log('data found')
      
      // Downloading Excel File
      cy.wait(12000) 
     // cy.get('.col-lg-1 > .btn').click({force:true})
      //cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/app-collection[1]/div[4]/div[1]/div[1]/div[4]/button[1]/img[1]').click({force:true})
    
 
   }
   else
    {
      cy.log('No data found')
   }
   // Scrolling to top
     cy.scrollTo('top')

  })
