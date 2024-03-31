// Wheel of Excitement - Faerieland - 2 hour cooldown
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/_explore";

describe("Wheel of Excitement", () => {
  it("Wheel of Excitement", () => {
    explore.explore(explore.links.faerieLand);
    cy.get(faerieLand.selectors.liWheelOfExcitement).click();
    cy.wait(3000); // Wait for wheel to load
    cy.get(faerieLand.selectors.btnWheelSpin).click();
    cy.wait(8000); // Wait for wheel to finish spinning
    cy.get(faerieLand.selectors.canvasWheel).click();
  });
});
