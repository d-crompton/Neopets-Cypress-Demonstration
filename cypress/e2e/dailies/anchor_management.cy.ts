// Anchor Management - Krawk Island
import { krawkIsland } from "../../page_objects/explore/KrawkIsland";

describe("Anchor Management", () => {
  it("Anchor Management", () => {
    cy.visit(krawkIsland.urls.anchorManagement);

    cy.get("body").then((body) => {
      if (body.find(krawkIsland.selectors.pDesc).length == 1) {
        throw new Error("You have already visited today");
      } else {
        cy.get(krawkIsland.selectors.btnFire).click();
      }
    });
  });
});
