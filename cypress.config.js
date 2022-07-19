const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://gallery-app.vivifyideas.com/',
    env: {
      EXTERNAL_EMAIL: 'marko.ranisavljev91test@gmail.com',
      EXTERNAL_PASSWORD: 'miholjdan1991',
      API_BASE_URL: 'https://gallery-api.vivifyideas.com/api'  
    }
  },
});
