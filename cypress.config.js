const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
baseUrl: 'https://coding.pasv.us/'
  },
});
