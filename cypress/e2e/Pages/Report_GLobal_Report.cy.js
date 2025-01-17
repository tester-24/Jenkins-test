/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
cy.visit('https://comet.jainam.in/#/startup');
cy.wait(3000);

cy.get('.login-space-btn').click();
loginPage.enterUsername();
loginPage.enterPassword();
loginPage.clickLogin();
//cy.wait(3000);

//Pin Page

// cy.get('.form_wrap').click();
// cy.wait(2000);

// //Enter Pin
// cy.wait(1000);
// cy.get('[formcontrolname="otp1"]').type('0');
// cy.get('[formcontrolname="otp2"]').type('0');
// cy.get('[formcontrolname="otp3"]').type('0');
// cy.get('[formcontrolname="otp4"]').type('0');
// cy.wait(3000);




// //Enter Pin
// cy.wait(1000);
// cy.get('[formcontrolname="otp1"]').type('1');
// cy.get('[formcontrolname="otp2"]').type('2');
// cy.get('[formcontrolname="otp3"]').type('3');
// cy.get('[formcontrolname="otp4"]').type('4');
// cy.wait(3000);
 

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
   cy.wait(2000)
   cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
   
   // Verify that the page or URL is updated
   cy.wait(4000)
   cy.url().should('include', 'https://comet.jainam.in/#/corporate-actions');
   Cypress.on('uncaught:exception', (err) => {
     // returning false here prevents Cypress from
     // failing the test
     console.log('Cypress detected uncaught exception: ', err);
     return false;
   });
// token link
//cy.visit('https://uatcomet.jainam.in/#/RedirectToComet/jplus/?6r3+QKbMUDkiMZAdAPLpzYQAAMfXAxRTXy3TwJL/ij2+8yniWqsQN5CxIMcT082BZ79LFbKrXcoNjJLaGLVG0jieh0WNPDsse3ShhS4iRV2Z9q2mTPzOve9U2JSh4DkP')
//cy.wait(500)
// cy.xpath('/html/body/app-root/app-client-header-navbar/div[1]/div/nav/div[2]/ul/li[3]').click() 


    // click on Reports
    cy.wait(4000)
    cy.get('#ReportDropdown').click({ force: true })
    cy.wait(2000)
    cy.get('[href="#/pnl"]').click()
    cy.wait(4000)

    // // 4) Global Report
    // cy.get('#ReportDropdown').click()
    // cy.get('[href="#/pnl"]').click()
    // cy.wait(3000)

    //Selecting EQUITY
    //cy.wait(2000)
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click({force:true})
    
    //Click on DOWNLOAD BY 
   cy.wait(1000)
    cy.get(':nth-child(2) > .form-group').click()
        .type("{downArrow}{Enter}")
     //cy.wait(3000)

    //Select From Date - Calendar

    cy.get('#datepicker-1').clear()
    cy.get('#datepicker-1').type('1/4/2024')
    //cy.wait(3000)


    //Download Type
    cy.get(':nth-child(5) > .form-group').click()
        .type("{downArrow}{Enter}")
   // cy.wait(2000)

    // //Enter Code
   
    // cy.get('.form-control').type('WA603')
    // cy.wait(3000)

    //Download Type
    cy.get('kendo-dropdownlist[name="downloadType"] span').eq(0).click({ force: true })
    //cy.wait(3000)


    //Download 
    cy.wait(3000)
     // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
   // cy.get('.col-lg-2 > .btn').click()
   // cy.wait(9000)


//     //Selecting DERIVATIVE 
//   cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click({ force: true })
//   .type("{downArrow}{Enter}")

//   //Download By
//   cy.get(':nth-child(2) > .form-group').click()
//       .type("{downArrow}{Enter}")
//   cy.wait(3000)

//   //Select From Date - Calendar

//   cy.get('#datepicker-1').clear()
//   cy.get('#datepicker-1').type('1/4/2024')
//   cy.wait(3000)





    
})
