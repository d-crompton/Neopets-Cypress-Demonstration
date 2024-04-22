import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";
import { explore } from "../../page_objects/explore/_explore";

// Deserted Tomb - Lost City of Geraptiku, Mystery Island
describe("Deserted Tomb", () => {
  it("Deserted Tomb", () => {
    explore.explore(mysteryIsland.area);
    cy.get(mysteryIsland.selectors.liGeraptiku).click();
    cy.get(mysteryIsland.selectors.liDesertedTomb).click();
    // Inside Tomb
    cy.get(mysteryIsland.selectors.btnOpenDoor).click();
    cy.get(mysteryIsland.selectors.btnContinueOn).click();
    cy.get(mysteryIsland.selectors.btnLeave).click();
  });
});
