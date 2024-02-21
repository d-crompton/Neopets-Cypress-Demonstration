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
    // See if the "oops" element is picked up by the selector on a regular play
    // #strtest_container > div[style*='color: darkred;'] > p > b:first-of-type

    // Press button - May need to press twice, once to start game, once to hit
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
    cy.wait(1000);
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
  });
});
