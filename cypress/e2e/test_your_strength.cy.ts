// Explore to "Test Your Strength"
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";
import { explore } from "../page_objects/explore/explore";

describe("Test Your Strength", () => {
  it("Test Your Strength", () => {
    // Go to Haunted Woods > Fairground > Test Your Strength
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
    // Start game
    cy.wait(5000); // Try lower wait times 10000 works
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
  });
});
