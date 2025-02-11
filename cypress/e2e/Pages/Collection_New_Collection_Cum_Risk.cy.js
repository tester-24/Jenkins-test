/// <reference types="cypress"/>

import { text } from "body-parser"
//import { LoginPage } from "./login_1.cy.js"
//const loginPage = new LoginPage
describe(" Collection_New_ Collection_ Cum_ Risk", () => {
it('Comet_Jainam', () => {
  cy.clearCookies();
  cy.wait(500)
  cy.visit('https://jplus.jainam.in/')
  //cy.reload()
  //cy.wait(500)
 // cy.get('.login-space-btn').click()
 // cy.clearCookies();
  cy.wait(1000)
  //Login Flow
  //cy.wait(2000)

  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('1126')

  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()

  // enter password
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Jainam@123')

  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()

  //Pin Page    
  //cy.get('.form_wrap').click()


  //Enter Pin
  cy.wait(2000);
  // enter the pin 
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)

  //click on comet icon
  cy.wait(4000) 
  cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
  .click({timeout:3000});  


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
  cy.get('.k-input-value-text').click()
  //cy.get('.k-list-item ng-star-inserted').select('index','2')
  cy.wait(500)
  cy.contains('span', 'New Collection Cum Risk').click({ force: true });

  //   //Select Category
  //   cy.get('.k-input-value-text').click()
  //   cy.get('select')


  //   cy.get('.k-input-value-text').click()
  //   .type("{downArrow}{downArrow}{Enter}")



  //Click on Submit Button
  //cy.get('.col-md-3 > .btn').click()
  cy.get('.col-md-3 > .btn').should('be.visible')
  cy.get('.col-md-3 > .btn').click()
  // cy.get(':nth-child(1) > .text-disable-drag').contains(text,' Last Updated on :')
  //  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/app-collection[1]/div[4]/div[1]/div[1]/div[1]/label[1]').then(() => {
  // Continue with the next code after data is loaded
  // cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',1)

  //})



  if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
    cy.log('data found')

    // Downloading Excel File
    cy.wait(12000)
    // cy.get('.col-lg-1 > .btn').click({force:true})
    //cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/app-collection[1]/div[4]/div[1]/div[1]/div[4]/button[1]/img[1]').click({force:true})


  }
  else {
    cy.log('No data found')
  }
  // Scrolling to top
  cy.scrollTo('top')

  // logout
  // click on user profile 
  cy.get('.user-icon').click({ force: true })
  cy.wait(1000)
  cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({ force: true })
  // cy.get('.mt-4 > :nth-child(4)').click({force:true})
  cy.wait(1000)


})

  })
