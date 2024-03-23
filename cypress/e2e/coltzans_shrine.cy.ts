import { lostDesert } from "../page_objects/explore/LostDesert";
import { explore } from "../page_objects/explore/explore";

// Coltzan's Shrine - 13 hour cooldown
describe("Coltzan's Shrine", () => {
  it("Coltzan's Shrine", () => {
    explore.explore(explore.strings.lostDesert);
    cy.get(lostDesert.selectors.liColtzans).click();
    cy.get(lostDesert.selectors.btnApproachShrine).click();
  });
});
