// Fishing Vortex - Maraquan Ruins
import { maraqua } from "../../page_objects/explore/Maraqua";
import { explore } from "../../page_objects/explore/_explore";
import { homePage } from "../../page_objects/homepage/homepage";
import { petCareWindow } from "../../page_objects/homepage/petCareWindow";
import { navigationBar } from "../../page_objects/navigationBar";

describe("Fishing Vortex", () => {
  it("Fishing Vortex", () => {
    cy.get(homePage.selectors.divPet).then((pets) => {
      for (let i = 1; i <= pets.length; i++) {
        // After first iteration (w/ first pet) switch pets and go back to fishing hole
        if (i != 1) {
          cy.get(navigationBar.selectors.divLogo).click();
          cy.get(
            homePage.selectors.selectPet.replace("X", i.toString())
          ).click();
          cy.get(petCareWindow.selectors.activeButton).click();
          cy.get(petCareWindow.selectors.petStatusExit).click();
        }
        explore.explore(explore.strings.maraqua);
        cy.get(maraqua.selectors.liRuins).click();
        cy.get(maraqua.selectors.liFishingVortex).click();
        cy.get(maraqua.selectors.btnReelLine).click();
      }
    });
  });
});
