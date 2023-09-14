import { login } from "../../support/login";
import { explore } from "../../page_objects/explore/explore";
import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";

describe("tombola", () => {
  before(() => {
    login();
  });

  it("Play Tombola", () => {
    // Go to Mystery Island
    explore.explore(explore.strings.mysteryIsland);
    // Click Tombola Link
    cy.get(mysteryIsland.selector.liTombola).click();
    // Click Tombola Button
    cy.get(mysteryIsland.selector.inputPlayTomabola).click();
  });
});
