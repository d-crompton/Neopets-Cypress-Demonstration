// Wheel of Knowledge - Brightvale - Daily spin
import { explore } from "../../page_objects/explore/_explore";
import { brightvale } from "../../page_objects/explore/Brightvale";

describe("Wheel of Knowledge", () => {
  it("Wheel of Knowledge", () => {
    explore.explore(explore.links.brightvale);
    cy.get(brightvale.selectors.liWheelOfKnowledge).click();
    cy.wait(3000); // Wait for wheel to load
    cy.get(brightvale.selectors.canvasWheel).click();
    cy.wait(8000); // Wait for wheel to finish spinning
    cy.get(brightvale.selectors.canvasWheel).click();
  });
});
