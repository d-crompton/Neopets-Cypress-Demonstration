// Tombola - Mystery Island
import { explore } from "../../page_objects/explore/_explore";
import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";

describe("tombola", () => {
  it("Play Tombola", () => {
    explore.explore(explore.links.mysteryIsland);
    cy.get(mysteryIsland.selectors.liTombola).click();
    cy.get(mysteryIsland.selectors.inputPlayTomabola).click();
  });
});
