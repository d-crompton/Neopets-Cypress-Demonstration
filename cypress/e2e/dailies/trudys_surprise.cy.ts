// Trudy's Surprise - Click notification and spin wheel

import { navigationBar } from "../../page_objects/navigationBar";
import { trudysSurprise } from "../../page_objects/trudysSurprise";

describe("Trudy's Surprise", () => {
  it("Trudy's Suprise", () => {
    cy.get(navigationBar.selectors.divBellIcon).click();
    // Force necessary to break through "li" that doesn't respond to click
    cy.get(navigationBar.selectors.liFirstAlert).click({ force: true });
    // Manage iframe - https://stackoverflow.com/questions/75463363/cant-find-item-in-cypress-even-though-its-in-dom
    // https://www.lambdatest.com/blog/how-to-handle-iframes-in-cypress/
    cy.wait(5000);
    // This code works
    // cy.get(".trudyiframe").then((iframe) => {
    //   cy.wrap(iframe.contents().find("body")).then((body) => {
    //     cy.wrap(body.find("canvas")).click(450, 600);
    //   });
    // });
    //=================
    // TO DO - Try to tidy up the code
    cy.get(trudysSurprise.selectors.iframe).then((iframe) => {
      cy.wrap(iframe.contents().find("body canvas")).then((body) => {
        cy.wrap(body.find(trudysSurprise.selectors.canvas)).click(450, 600);
      });
    });
  });
});
