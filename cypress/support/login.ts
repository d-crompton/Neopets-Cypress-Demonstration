// Functions for logging in to be used by test specs
import credentials from "../fixtures/credentials";
import { loginPage } from "../page_objects/login";

export function login() {
  // Enter crendetials on login page
  cy.visit(loginPage.url);
  cy.get(loginPage.selectors.inputUsername).type(credentials.username);
  cy.get(loginPage.selectors.inputPassword).type(credentials.password);
  cy.get(loginPage.selectors.btnLogIn).click();
  // Dismiss the pop-up
  cy.get(loginPage.selectors.btnPromoClose).click();
  // Open the "Play Neopets" link
  cy.get(loginPage.selectors.btnMobileMenu).click();
  cy.get(loginPage.selectors.txtPlayNeopets).click();
}
