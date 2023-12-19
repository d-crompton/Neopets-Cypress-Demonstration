// Buy and Scratch off the Haunted Scratchcard
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";
import { explore } from "../page_objects/explore/explore";

describe("Buy and scratch Scratchcard", () => {
  it("Buy and scratch Scratchcard", () => {
    // Navigate to scratchcard
    explore.explore(explore.strings.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    cy.get(hauntedWoods.selectors.liScratchcard).click();
    // Buy scratchcard
    cy.get(hauntedWoods.selectors.btnBuyScratchcard).click();
    // Check if you get redirected to error for buying too soon
    cy.get("body").then((body) => {
      if (
        cy
          .wrap(body)
          .contains(hauntedWoods.strings.scratchcardGiveEverybodyElse)
      ) {
        throw new Error(
          "Custom Error - You have already purchased a scratchcard in the past 2 hours"
        );
      }
    });
    // If not - Select the scratchcard
    cy.get(hauntedWoods.selectors.selectScratchcard).select(1);
    cy.get(hauntedWoods.selectors.btnScratch).click();
    // Loop through the Selectors and scratch the first 6 spots (top 2 rows)
    for (let i = 1; i <= 6; i++) {
      cy.get(hauntedWoods.selectors[`tdSpot${i}`]).click();
    }
  });
});
