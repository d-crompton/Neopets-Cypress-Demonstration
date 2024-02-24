// Explore to "Test Your Strength"
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";
import { explore } from "../page_objects/explore/explore";

describe("Test Your Strength", () => {
  it("Test Your Strength", () => {
    // Go to Haunted Fairground > Test Your Strength
    explore.explore(explore.strings.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    cy.get(hauntedWoods.selectors.liTestYourStrength).click();
    // Check that you haven't played in the last 6 hours
    cy.document().then((document) => {
      let oopsText = document.querySelector(hauntedWoods.selectors.bOops);
      if (oopsText != null) {
        throw new Error(
          "Custom Error - You've already played within the last 6 hours"
        );
      }
    });
    // Press button - May need to press twice, once to start game, once to hit
    cy.wait(3000);
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
    // cy.wait(3000);
    // cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
  });
});
