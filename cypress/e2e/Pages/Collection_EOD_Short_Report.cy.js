/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy.js"
//const loginPage = new LoginPage
describe("Collection_ EOD_ Short", () => {
it('Comet_Jainam', () => {
  cy.clearCookies();
  cy.wait(500)
    cy.visit('https://comet.jainam.in/#/startup')
    //cy.reload()
  cy.wait(1000)
    cy.get('.login-space-btn').click()
    //cy.reload()
    cy.clearCookies();
    //cy.wait(3000)
     //Login Flow
    cy.wait(500)
    
     cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('1126')
     
     //click on continue button
     cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
     
     // enter password
     cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Jainam@123')
     
     //click on continue button
     cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()

    // loginPage.enterUsername()
    // loginPage.enterPassword()
    // loginPage.clickLogin()
    // //cy.wait(3000)

    //Pin Page
    //cy.get('.form_wrap').click()
   // cy.wait(2000)
 
  //Enter Pin
  // enter the pin 
  cy.wait(2000)
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)
 // cy.wait(3000);
   
   //cy.get('.continue_button_wrap > p').click()
   //cy.wait(3000)
    
  //  //click on comet icon
  //    cy.wait(500) 
  //    cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
  //    .click({timeout:3000});  
    // cy.visit('https://comet.jainam.in/#/RedirectToComet/jplus?Zl8uVBZFYw2xpegWIjf2UaiGgzCvXQntxK4a/FT4pfdn/d9oAaRVYeGTUJKEklroRkjuT4cvxyEvjpOQYC/CQA9vz8yqK02fBUdkVxiJh5XlasywT7QScXNANGNNqGsuiaK49dMyW8hFN9/XEbmH6w==')



  //Click on PARTNERS
  cy.wait(4000)
  cy.get('#PartnerDropdown').click()
  //cy.wait(3000)

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  //cy.wait(3000)


//   //Select Category
  cy.get('.k-input-value-text').click()
  //cy.get('.k-list-item ng-star-inserted').select('index','2')
  cy.wait(1000)
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').click();

  // cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist').select(3)
  //cy.contains('[role="combobox"]',"New Collection Cum Risk").click()
  //cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]/span[1]').click()
  
 //cy.contains('#k-c9a86642-da75-4ab0-a316-568c23fd8438').select("New Collection Cum Risk")
  //cy.contains('name attribute is not available for this element','New Collection Cum Risk').click()
 //cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist')
// Click the dropdown to open it
// cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/span/span')
//   .click();

// // Click the option that contains the text 'New Collection Cum Risk'
// cy.wait(2000)
// cy.contains('.k-picker-md k-rounded-md k-picker-solid k-dropdownlist k-picker ng-valid ng-touched ng-dirty','New Collection Cum Risk').click()
//cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/span/span[contains(text(), "New Collection Cum Risk")]')
 // .click();

//   cy.get('select')
//  // cy.wait(3000)

//   cy.get('.k-input-value-text').click()
//   .type("{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{Enter}")
//   //cy.wait(3000)


  //Click On Submit Button
  cy.get('.mt-1 > .btn').click()
  //cy.wait(7000)


  //Click on Calendar
  cy.get('.collection_date_picker > .k-input-button')

  //cy.wait(3000)
  if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
      {
        cy.log('data found')
        // downloading Excel File 
        
        //Download Excel
          cy.wait(35000)
         //cy.get('.btn > .ng-star-inserted').click()
          // cy.wait(3000)
   
      }
      else
      {
        cy.log('No data found')
      }
     // Scrolling to top
       //cy.wait(2000)
       cy.scrollTo('top')

       // logout
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1000)
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)

  //Download Excel
  //.cy.get('.btn > .ng-star-inserted').click()
  //.cy.wait(3000)
   
   
})

})
