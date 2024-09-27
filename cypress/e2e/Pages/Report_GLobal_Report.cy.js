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
cy.get('[formcontrolname="otp1"]').type('1');
cy.get('[formcontrolname="otp2"]').type('2');
cy.get('[formcontrolname="otp3"]').type('3');
cy.get('[formcontrolname="otp4"]').type('4');
//cy.wait(3000);
 
 //cy.get('.continue_button_wrap > p').click()
 //cy.wait(3000)
 //cy.get('.continue_button_wrap > p').click()
 //cy.wait(5000)


// //Click on form
// cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
// cy.wait(3000);

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
    cy.wait(2000)
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
    
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
