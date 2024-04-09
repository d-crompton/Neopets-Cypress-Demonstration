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
    // Check if either you've taken omelette today or its ran out
    cy.get("body").then((body) => {
      if (body.find(tyranniaPlateau.selectors.imgSabreX)) {
        throw new Error("No omelette for you");
      }
    });
  });
});
