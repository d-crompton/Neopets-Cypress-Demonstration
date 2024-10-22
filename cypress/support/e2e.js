// Import commands.js using ES2015 syntax:
import "./commands";
import { login } from "./login";
import { homePage } from "../page_objects/homepage/homepage";

// Code to run before every test
before(() => {
  login();
  // Close NeoPass window
  // cy.get(homePage.selectors.neopassWindowClose).click();
  // Prevent Uncaught Exception SyntexError:',' when home page loads
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

// after(() => {
//   // Code to run after every test
// });
