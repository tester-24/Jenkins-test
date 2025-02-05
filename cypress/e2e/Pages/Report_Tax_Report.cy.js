/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage
describe(" Tax P&L_Reports", () => {
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
    cy.wait(3000)
     // click on report and select tax p and l  report
    
    cy.get('#ReportDropdown').click({force:true})
    cy.get('[href="#/tax"]').click({force:true})
    cy.wait(2000)
    // cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").click({force:true})
    // // cy.wait(500)
    //  cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
    //  cy.wait(500)
    //  cy.window().then((win) => {
    //         cy.stub(win, 'open').callsFake((url) => {
    //           win.location.href = url;
    //         });
    //       });
    //       cy.wait(1000)
    //    //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
    //  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[5]/a[1]').click({force:true})

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
})
