// Anchor Management - Krawk Island
import { krawkIsland } from "../../page_objects/explore/KrawkIsland";

describe("Anchor Management", () => {
  it("Anchor Management", () => {
    cy.visit(krawkIsland.urls.anchorManagement);
    cy.get(krawkIsland.selectors.btnFire).click();
  });
});
