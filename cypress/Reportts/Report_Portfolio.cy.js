/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    cy.wait(3000)

    //Pin Page
    cy.get('.form_wrap').click()
    cy.wait(2000)
 
  //Enter Pin
  cy.wait(1000);
  cy.get('[formcontrolname="otp1"]').type('0');
  cy.get('[formcontrolname="otp2"]').type('0');
  cy.get('[formcontrolname="otp3"]').type('0');
  cy.get('[formcontrolname="otp4"]').type('0');
  cy.wait(3000);
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)

 
   
    //Click on form
    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    cy.wait(5000);
    
   //Click on Reports 
   cy.get('#ReportDropdown').click()
   cy.wait(3000)

   //Go to Portfolio
   cy.get('[href="#/portfolio"]').click()
   cy.wait(3000)

   //Selecting Drp down
   //cy.get('#k-3622423a-aed6-45c0-826e-a359d6c6de56 > .k-select').type("{downArrow}{Enter}")
   
})
