// Coltzan's Shrine - Lost Desert - 13 hour cooldown (midnight reset)
import { lostDesert } from "../../page_objects/explore/LostDesert";
import { explore } from "../../page_objects/explore/_explore";

describe("Coltzan's Shrine", () => {
  it("Coltzan's Shrine", () => {
    explore.explore(explore.links.lostDesert);
    cy.get(lostDesert.selectors.liColtzans).click();
    cy.get(lostDesert.selectors.btnApproachShrine).click();
  });
});
