// Trudy's Surprise - Daily- Click notification and spin wheel
import { navigationBar } from "../../page_objects/navigationBar";
import { trudysSurprise } from "../../page_objects/trudysSurprise";

describe("Trudy's Surprise", () => {
  it("Trudy's Suprise", () => {
    cy.get(navigationBar.selectors.divBellIcon).click();
    // Check if alert appears in the Alerts tab
    cy.get(navigationBar.selectors.divAlerts).then((alerts) => {
      if (alerts.contents().find("li").length == 0) {
        // If not, go to "View all"
        cy.get(navigationBar.selectors.aViewAll).click();
        // TO DO - CHECK IF ALERT APPEARS HERE, IF SO GO THROUGH THERE
      } else {
        // If so click it
        cy.get(navigationBar.selectors.liFirstAlert).click({ force: true });
      }
    });
    cy.wait(4000); // Wait for slots iframe to load
    cy.get(trudysSurprise.selectors.iframe).then((iframe) => {
      cy.wrap(iframe.contents().find("body")).then((body) => {
        cy.wrap(body.find(trudysSurprise.selectors.canvas)).click(450, 600);
      });
    });
  });
});
