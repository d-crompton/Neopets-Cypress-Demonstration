// Haunted Scratchcard - Haunted Woods - 2 hour cooldown
import { hauntedWoods } from "../../page_objects/explore/HauntedWoods";
import { explore } from "../../page_objects/explore/_explore";
import { scratchcards } from "../../page_objects/scratchcards";

describe("Buy and scratch Scratchcard", () => {
  it("Buy and scratch Scratchcard", () => {
    explore.explore(explore.strings.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    cy.get(hauntedWoods.selectors.liScratchcard).click();
    cy.get(hauntedWoods.selectors.btnBuyScratchcard).click();
    // Check if you get redirected to error for buying too soon
    cy.url().then((url) => {
      console.log(url);
      if (url == hauntedWoods.strings.scratchcardGiveEverybodyElseLink) {
        throw new Error(
          "Custom Error - You have already purchased a scratchcard in the past 2 hours"
        );
      }
    });
    // Select the scratchcard and play
    cy.get(hauntedWoods.selectors.selectScratchcard).select(1);
    cy.get(hauntedWoods.selectors.btnScratch).click();
    for (let i = 1; i <= 6; i++) {
      cy.get(scratchcards.selectors[`tdSpot${i}`]).click();
    }
  });
});
