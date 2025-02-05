/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage
describe("Global_ Report", () => {
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
cy.wait(3000)
// cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
// cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").invoke('show').click({force:true})
//      // cy.wait(500)
//       cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
//       cy.wait(500)
//       cy.window().then((win) => {
//              cy.stub(win, 'open').callsFake((url) => {
//                win.location.href = url;
//              });
//            });
//            cy.wait(2000)
//         //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
//       cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[3]/a[1]').click({force:true})

    // click on report and select global report
    // 4) Global Report
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/pnl"]').click()
    cy.wait(3000)

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

    
})
