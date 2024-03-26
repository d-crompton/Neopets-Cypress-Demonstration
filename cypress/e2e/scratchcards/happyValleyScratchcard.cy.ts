// Happy Valley Kiosk Scratchcard - Terror Mountain - 6 hour cooldown
import { explore } from "../../page_objects/explore/_explore";
import { terrorMountain } from "../../page_objects/explore/TerrorMountain";
import { scratchcards } from "../../page_objects/scratchcards";

describe("Happy Valley Scratchcard", () => {
  it("Happy Valley Scratchcard", () => {
    explore.explore(explore.strings.terrorMountain);
    cy.get(terrorMountain.selectors.liScratchcardKiosk).click();
    cy.get(terrorMountain.selectors.btnBuyScratchcard).click();
    // Throw an error if you've already purchased within cooldown
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
