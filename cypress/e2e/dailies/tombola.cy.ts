// Tombola - Mystery Island
import { explore } from "../../page_objects/explore/_explore";
import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";

describe("tombola", () => {
  it("Play Tombola", () => {
    explore.explore(explore.strings.mysteryIsland);
    cy.get(mysteryIsland.selector.liTombola).click();
    cy.get(mysteryIsland.selector.inputPlayTomabola).click();
  });
});
