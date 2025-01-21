/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({ force: true })

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
  
     //Pin Page
   // cy.get('.form_wrap').click()
    
    //Enter Pin
    cy.wait(2000);
    cy.get('#pin1').type(1)
    cy.get('#pin2').type(2)
    cy.get('#pin3').type(3)
    cy.get('#pin4').type(4)
    cy.wait(5000)
    // cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
     cy.window().then((win) => {
         cy.stub(win, 'open').callsFake((url) => {
           win.location.href = url;
         });
       });
       cy.wait(5000)
       cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click({force:true})
       
       // Verify that the page or URL is updated
       cy.wait(4000)
       cy.url().should('include', 'https://comet.jainam.in/#/corporate-actions');
       Cypress.on('uncaught:exception', (err) => {
         // returning false here prevents Cypress from
         // failing the test
         console.log('Cypress detected uncaught exception: ', err);
         return false;
       });
    // click on Reports
   cy.wait(4000)
    cy.get('#ReportDropdown').click({force:true})
    cy.get('[href="#/tax"]').click({force:true})
    
    // 5) Tax P&L - Selecting - Equity
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
     
    //Select FY Year
     cy.get('span.k-input-value-text').eq(1).click({ force: true }).type("{downArrow}{Enter}")
     
     //Click on view
     cy.get('.btn').click()
     cy.wait(12000)
     //cy.get('i.fa-cloud-download').eq(0).click({ force: true })
   

     //Selecting Segmet - NSE_FNO
     cy.wait(1000)
    cy.get('span.k-input-value-text').eq(0).click({ force: true }).type("{downArrow}{Enter}")
    
    //Download 
    //cy.get('.btn').click({ force: true })
    
    //Select Segment - CURRENCY
    cy.get('span.k-input-inner').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
  
    //Download 
   // cy.get('.btn').click({ force: true })
   
    //Select Segment - MCX
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    // .type("{downArrow}{Enter}")
   
    //Download 
    //cy.get('.btn').click({ force: true })
    cy.wait(500) 
    // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
   
})
