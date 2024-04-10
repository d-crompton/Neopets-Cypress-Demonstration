// Giant Omelette - Tyrannia Plateau
import { explore } from "../../page_objects/explore/_explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";

describe("Claim Giant Omelette", () => {
  it("Claim Giant Omelette", () => {
    explore.explore(explore.links.tyrannia);
    cy.get(tyranniaJungle.selectors.liPlateauLink).click();
    cy.get(tyranniaPlateau.selectors.liOmelette).click();
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
    // Already claimed today - Both an image of the omelette and Sabre-X will appear
    cy.get("body").then((body) => {
      if (
        body.find(tyranniaPlateau.selectors.imgOmelette) &&
        body.find(tyranniaPlateau.selectors.imgSabreX)
      ) {
        throw new Error("You have already claimed some omelette today");
      }
    });
    // Omelette is gone - A single bold text will have "The Omelette has Gone!!!"
    cy.get(tyranniaPlateau.selectors.bOmeletteGoneText)
      .invoke("text")
      .then((text) => {
        if (text === tyranniaPlateau.strings.omeletteHasGone) {
          throw new Error("There was no omelette left!");
        }
      });
  });
});
