// Fruit Machine - Sakhmet, Lost Desert
import { lostDesert } from "../../page_objects/explore/LostDesert";
import { explore } from "../../page_objects/explore/_explore";

describe("Fruit Machine", () => {
  it("Fruit Machine", () => {
    explore.explore(explore.links.lostDesert);
    cy.get(lostDesert.selectors.liSakhmet).click();
    cy.get(lostDesert.selectors.liFruitMachine).click();
    // Check if button exists, if so, spin, if not throw error
    cy.get("body").then((body) => {
      if (body.find(lostDesert.selectors.btnSpinFruitMachine).length == 1) {
        cy.get(lostDesert.selectors.btnSpinFruitMachine).click();
      } else {
        throw new Error("You have already spun the Fruit Machine today");
      }
    });
  });
});
