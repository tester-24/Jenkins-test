/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
   cy.wait(1000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
       // cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(`Home page load time: ${loadTime} seconds`);
        cy.log(`Home Page load time: ${endTime - startTime}  seconds`);

  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`Home page load time exceeded threshold! (${loadTime}ms)`);
        }
  
      })
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
   cy.wait(1000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
       // cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(`Login page load time: ${loadTime} seconds`);
        cy.log(`Login Page load time: ${endTime - startTime}  seconds`);


  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`Login page load time exceeded threshold! (${loadTime}ms)`);
        }
  
       })

    loginPage.enterUsername()
    loginPage.enterPassword()

    loginPage.clickLogin()
    //cy.wait(1000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
      //  cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(`Account page load time: ${loadTime} seconds`);
        cy.log(`Account Page load time: ${endTime - startTime}  seconds`);


  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`Account page load time exceeded threshold! (${loadTime}ms)`);
        }
  
       })
    //cy.wait(3000)

    //Pin Page
   // cy.get('.form_wrap').click()
   cy.wait(2000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
        //cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(` Comet page load time: ${loadTime} seconds`);
        cy.log(`Comet Page load time: ${endTime - startTime}  seconds`);

  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`comet page load time exceeded threshold! (${loadTime}ms)`);
        }
  
       })
    
    //cy.wait(2000)

    // //Enter Pin
    // cy.wait(1000);
    // cy.get('[formcontrolname="otp1"]').type('0')
    // cy.get('[formcontrolname="otp2"]').type('0')
    // cy.get('[formcontrolname="otp3"]').type('0')
    // cy.get('[formcontrolname="otp4"]').type('0')
    // // cy.get('.six_digit_pin_wrap').invoke('val').then((otp) => {
    // //     // 0000
    // // });
    // cy.wait(4000)


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
       cy.wait(6000)
       cy.url().should('include', 'https://comet.jainam.in/#/corporate-actions');
       Cypress.on('uncaught:exception', (err) => {
         // returning false here prevents Cypress from
         // failing the test
         console.log('Cypress detected uncaught exception: ', err);
         return false;
       });
  cy.wait(1000);

  cy.window().then((win) => {
      const startTime = performance.now(); // Capture start time

      // Wait for the page to load (adjust timeout as needed)
      //cy.wait(1000);

      const endTime = performance.now(); // Capture end time
      const loadTime = endTime - startTime; // Calculate load time

      console.log(`Comet Main page load time: ${loadTime} seconds`);
      cy.log('Comet Main page load time: ${loadTime} seconds')


      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
          console.warn(`Comet Main page load time exceeded threshold! (${loadTime}ms)`);
      }

     
  //cy.wait(1000);
   
   //cy.get('.continue_button_wrap > p').click()
 //  cy.wait(3000)

//    //Click on form
//    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
//    cy.wait(4000);


    // click on Reports
    cy.wait(4000)
    cy.get('#ReportDropdown').click({ force: true })
  })
   cy.wait(1000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
       // cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(`drop down click load time: ${loadTime} seconds`);
        cy.log(`Dropdown click load time: ${endTime - startTime}  seconds`);

  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`Drop down load time exceeded threshold! (${loadTime}ms)`);
        }
  
       })
    //cy.wait(1000)
    cy.get('[href="#/portfolio"]').click()
    //cy.wait(2000)


    // // 2) Portfolio
    // cy.get('#ReportDropdown').click()
    // cy.get('[href="#/portfolio"]').click()
    // cy.wait(3000)


    //Click on My Holding
    cy.wait(3000)
    cy.get('span.k-input-value-text').eq(0)
    cy.get('span.k-input-inner span').eq(0)
    cy.get('kendo-dropdownlist[name="CategoryName"] span').eq(1)
     cy.wait(1000)

    //Click on Submit Button

    cy.get('.d-flex > .btn').click({ force: true })

    cy.window().then((win) => {
      const startTime = performance.now(); // Capture start time

      // Wait for the page to load (adjust timeout as needed)
      //cy.wait(1000);

      const endTime = performance.now(); // Capture end time
      const loadTime = endTime - startTime; // Calculate load time

      console.log(`Submit button load time: ${loadTime} seconds`);
      cy.log(`Submit button load time: ${endTime - startTime}  seconds`);


      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
          console.warn(`Submit button load time exceeded threshold! (${loadTime}ms)`);
      }
    })


   cy.wait(5000)
   cy.scrollTo('center')

   // cy.wait(3000)
    if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
        {
          cy.log('data found')
          // downloading Excel File 
          
        //   cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
        //   cy.wait(2000)
        //   // Downloading PDF file
        //   cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()    
        
       // cy.wait(10000)
        
        //Click on Download File
      //  cy.wait(9000)
       // cy.get('[title="Download Report"] > img').click({ force: true })
      // cy.wait(1000);

        cy.window().then((win) => {
            const startTime = performance.now(); // Capture start time
      
            // Wait for the page to load (adjust timeout as needed)
           // cy.wait(1000);
      
            const endTime = performance.now(); // Capture end time
            const loadTime = endTime - startTime; // Calculate load time
      
            console.log(`Download report page load time: ${loadTime} seconds`);
            cy.log(`Download page load time: ${endTime - startTime}  seconds`);

      
            // Optionally, log a warning if load time exceeds a threshold
            if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
                console.warn(`Download page load time exceeded threshold! (${loadTime}ms)`);
            }
      
           })
       // cy.wait(4000)

    //Click on Download Button
  //  cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    
    //cy.wait(1000);

    cy.window().then((win) => {
        const startTime = performance.now(); // Capture start time
  
        // Wait for the page to load (adjust timeout as needed)
       // cy.wait(1000);
  
        const endTime = performance.now(); // Capture end time
        const loadTime = endTime - startTime; // Calculate load time
  
        console.log(`Download button load time: ${loadTime} seconds`);
        cy.log(`Download button load time: ${endTime - startTime}  seconds`);

  
        // Optionally, log a warning if load time exceeds a threshold
        if (loadTime > 1000) { // Adjust threshold as needed (2 seconds in this example)
            console.warn(`download button load time exceeded threshold! (${loadTime}ms)`);
        }
  
       })
    //cy.wait(3000)


    //Click on CLOSE Button
   // cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click({force:true})
    //cy.wait(3000)
  
      //  }
      //  else
      //  {
         // cy.log('No data found')
      //  }
       // Scrolling to top
         //cy.wait(2000)
        // cy.scrollTo('top')


    // //Download File
    // cy.get('[data-target="#DownloadModal"]').click()
    // cy.wait(7000)

    //Click on Download File
  //  cy.wait(3000)
    //cy.get('[title="Download Report"] > img').click({force:true})
  //  cy.wait(4000)

    //Click on Download Button
   // cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    //cy.wait(3000)

    //Click on CLOSE Button
  //  cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()
    //cy.wait(3000)

    // //Click on My Position
    // cy.get('.segment').type("{downArrow}{downArrow}{Enter}")
    // //.type("{downArrow}{downArrow}{Enter}")
    // cy.wait(4000)

    // // // //Click on SUBMIT Button
    // // //cy.get('form.ng-touched > :nth-child(2) > :nth-child(2)').click({ force: true })
    // // cy.wait(4000)

    // // if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    // //   {
    // //     cy.log('data found')
    // //     // downloading Excel File 
        
    // //   //   cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
    // //   //   cy.wait(2000)
    // //   //   // Downloading PDF file
    // //   //   cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()    
      
    // //   cy.wait(6000)
      
     

    // //   }
    // //   else
    // //   {
    // //     cy.log('No data found')
    // //   }
    // //  // Scrolling to top
    // //    cy.wait(2000)
    // //    cy.scrollTo('top')
    }
    // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
    })
    

