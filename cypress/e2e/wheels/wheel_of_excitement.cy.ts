// Faerieland - 2 hour cooldown

import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/explore";

describe("Wheel of Excitement", () => {
  it("Wheel of Excitement", () => {
    explore.explore(explore.strings.faerieLand);
    cy.get(faerieLand.selectors.liWheelOfExcitement).click();
    cy.wait(3000);
    cy.get(faerieLand.selectors.btnWheelSpin).click();
    cy.wait(7000);
    cy.get(faerieLand.selectors.canvasWheel).click();
  });
});
