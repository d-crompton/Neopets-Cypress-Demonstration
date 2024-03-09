// Functions for logging in to be used by test specs
import credentials from "../fixtures/credentials";
import { loginPage } from "../page_objects/login";

export function login() {
  cy.visit(loginPage.url);
  cy.get(loginPage.selectors.inputUsername).type(credentials.username);
  cy.get(loginPage.selectors.inputPassword).type(credentials.password);
  cy.get(loginPage.selectors.btnLogIn).click();
}

export function loginUsingSession() {
  cy.session(credentials.username, () => {
    cy.visit(loginPage.url);
    cy.get(loginPage.selectors.inputUsername).type(credentials.username);
    cy.get(loginPage.selectors.inputPassword).type(credentials.password);
    cy.get(loginPage.selectors.btnLogIn).click();
    cy.visit("home");
  });
}
