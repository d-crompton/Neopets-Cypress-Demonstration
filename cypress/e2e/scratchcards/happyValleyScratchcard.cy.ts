// Purchase and scratch a Happy Valley Kiosk Scratchcard - Cooldown 6 hours
import { explore } from "../../page_objects/explore/explore";
import { terrorMountain } from "../../page_objects/explore/TerrorMountain";
import { scratchcards } from "../../page_objects/scratchcards";

describe("Happy Valley Scratchcard", () => {
  it("Happy Valley Scratchcard", () => {
    // Navigate to Kiosk
    explore.explore(explore.strings.terrorMountain);
    cy.get(terrorMountain.selectors.liScratchcardKiosk).click();
    // Buy scratchcard
    cy.get(terrorMountain.selectors.btnBuyScratchcard).click();
    // Check error when you already purchased one
    cy.url().then((url) => {
      if (url == terrorMountain.urls.scratchcardAlreadyPurchased) {
        throw new Error(
          "Custom Error - You have already purchased a scratchcard in the past 6 hours"
        );
      }
    });
    // Select and scratch card
    cy.get(terrorMountain.selectors.selectScratchcard).select(1);
    cy.get(terrorMountain.selectors.btnScratch).click();
    for (let i = 1; i <= 6; i++) {
      if (i == 6) {
        cy.get(scratchcards.selectors.winterTdSpot6).click();
      }
      cy.get(scratchcards.selectors[`tdSpot${i}`]).click();
    }
  });
});
