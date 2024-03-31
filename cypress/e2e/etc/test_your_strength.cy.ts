// Test Your Strength - Haunted Fairground - 6 hour cooldown
import { hauntedWoods } from "../../page_objects/explore/HauntedWoods";
import { explore } from "../../page_objects/explore/_explore";

describe("Test Your Strength", () => {
  it("Test Your Strength", () => {
    explore.explore(explore.links.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    cy.get(hauntedWoods.selectors.liTestYourStrength).click();
    cy.document().then((document) => {
      let oopsText = document.querySelector(hauntedWoods.selectors.bOops);
      if (oopsText != null) {
        throw new Error(
          "Custom Error - You've already played within the last 6 hours"
        );
      }
    });
    cy.wait(7000);
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click(); // Start game
  });
});
