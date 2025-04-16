const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on)
    },
  },
});

module.exports = defineConfig({
  //projectId: 'fr6xeg',
  //projectId: "7hxuzw",
 //projectId: "rtg5p3",
   //projectId: "coukua",
 // projectId: "11ocww",
  // projectId: "ca5wwc",
// projectId: "xnpdh8",
  //projectId: "wjxjuw",
  // projectId: "pr3fsn",
// projectId: "9agny7",
// projectId: "9h5ak7",
 //projectId: "g9hiee",
 // projectId: "8nhtrt",
    projectId: "hfwo7o",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress - report',
    embeddedScreenshots: true,
    html: true,
    
    inlineAssets: true,
    saveAllAttempts: true,
    screenshots: true,
    enableCode:false,
    
    //Cypress.config('defaultCommandTimeout', 10000);
    
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      

    },
    experimentalMemoryManagement: true,
    numTestsKeptInMemory:0,
  
  },

});
