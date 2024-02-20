// Explore to "Test Your Strength"
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";
import { explore } from "../page_objects/explore/explore";

describe("Test Your Strength", () => {
  it("Test Your Strength", () => {
    // Go to Haunted Fairground
    explore.explore(explore.strings.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    // Go to Test Your Strength
    cy.get(hauntedWoods.selectors.liTestYourStrength).click();
    // Press button - May need to press twice, once to start game, once to hit
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
    cy.wait(1000);
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
  });
});
