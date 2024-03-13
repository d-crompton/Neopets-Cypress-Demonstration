// Trudy's Surprise - Click notification and spin wheel

import { navigationBar } from "../../page_objects/navigationBar";
import { trudysSurprise } from "../../page_objects/trudysSurprise";

describe("Trudy's Surprise", () => {
  it("Trudy's Suprise", () => {
    cy.get(navigationBar.selectors.divBellIcon).click();
    cy.get(navigationBar.selectors.liFirstAlert).click({ force: true }); // Force used to click unresponsive "li"
    // IF ALERT DOESN'T APPEAR HERE, go to the older view and select the alert from there
    // View All >
    // IF ALERT DOESN'T APPEAR IN VIEW ALL, THROW ERROR
    cy.wait(4000); // Wait for game to load
    cy.get(trudysSurprise.selectors.iframe).then((iframe) => {
      cy.wrap(iframe.contents().find("body")).then((body) => {
        cy.wrap(body.find(trudysSurprise.selectors.canvas)).click(450, 600);
      });
    });
  });
});
