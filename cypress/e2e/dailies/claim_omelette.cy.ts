// Giant Omelette - Tyrannia Plateau
import { explore } from "../../page_objects/explore/_explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";

describe("Claim Giant Omelette", () => {
  it("Claim Giant Omelette", () => {
    explore.explore(explore.links.tyrannia);
    cy.get(tyranniaJungle.selectors.liPlateauLink).click();
    cy.get(tyranniaPlateau.selectors.liOmelette).click();
    // Check error doesn't appear or another error when the omelette is there
    cy.get("body").then((body) => {
      if (body.find(tyranniaPlateau.selectors.bOmeletteGoneText)) {
        throw new Error("Omelette is gone!!!");
      }
    });
    // If neither error is thrown, collect the omelette
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
    // Already claimed today error appears after you try to collect it?
  });
});
