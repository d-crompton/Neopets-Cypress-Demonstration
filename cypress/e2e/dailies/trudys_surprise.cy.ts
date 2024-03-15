// Trudy's Surprise - Daily- Click notification and spin wheel
import { navigationBar } from "../../page_objects/navigationBar";
import { trudysSurprise } from "../../page_objects/trudysSurprise";

describe("Trudy's Surprise", () => {
  it("Trudy's Suprise", () => {
    cy.get(navigationBar.selectors.divBellIcon).click();
    // Check if alert appears in the Alerts tab
    cy.get(navigationBar.selectors.divAlerts).then((alerts) => {
      if (alerts.contents().find("li").length == 0) {
        // If not, go to "View all" and check if the alert is there
        cy.get(navigationBar.selectors.aViewAll).click();
        cy.get(navigationBar.selectors.allAlertsContent).then((contents) => {
          if (
            contents.contents().find(navigationBar.selectors.aAlertFirstRow)
              .length == 1
          ) {
            cy.get(
              `${navigationBar.selectors.tableAlerts} ${navigationBar.selectors.aAlertFirstRow}`
            ).click();
          } else {
            // If there's no alert in either place, throw an error
            throw new Error(
              "Trudy's Surprise is not ready - check back tomorrow"
            );
          }
        });
      } else {
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
