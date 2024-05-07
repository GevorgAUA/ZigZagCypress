const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zr15ue',
  e2e: {
    baseUrl: 'https://www.zigzag.am/',
    setupNodeEvents(on, config) {
    },
  },
});
