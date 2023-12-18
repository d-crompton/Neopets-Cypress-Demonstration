// Buy and Scratch off the Haunted Scratchcard
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";
import { explore } from "../page_objects/explore/explore";

describe("Buy and scratch Scratchcard", () => {
  it("Go to and Buy scratchcard", () => {
    // Navigate to scratchcard
    explore.explore(explore.strings.hauntedWoods);
    cy.get(hauntedWoods.selectors.liFairground).click();
    cy.get(hauntedWoods.selectors.liScratchcard).click();
    cy.pause();
    // Buy scratchcard
    cy.get(hauntedWoods.selectors.btnBuyScratchcard).click();
  });

  it("Scratch scratchcard", () => {
    // Select the scratchcard
    cy.get(hauntedWoods.selectors.selectScratchcard).select(1);
    cy.get(hauntedWoods.selectors.btnScratch).click();
    // Loop through the Selectors and scratch the first 6 spots (top 2 rows)
    for (let i = 1; i <= 6; i++) {
      cy.get(hauntedWoods.selectors[`tdSpot${i}`]).click();
    }
  });
});
