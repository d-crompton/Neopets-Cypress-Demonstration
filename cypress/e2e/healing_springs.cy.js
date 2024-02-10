import { faerieLand } from "../page_objects/explore/FaerieLand";
import { explore } from "../page_objects/explore/explore";

describe("Visit Healing Springs", () => {
  it("Visit Healing Springs", () => {
    explore.explore(explore.strings.faerieLand);
    cy.get(faerieLand.selectors.liHealingSprings).click();
    cy.get(faerieLand.selectors.btnHealMyPets).click();
    // Throw error if the springs aren't ready
    // Check if .theme-bg p appears when successfully used.
  });
});
