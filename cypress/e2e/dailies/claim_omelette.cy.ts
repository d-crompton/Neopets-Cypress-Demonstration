// Giant Omelette - Tyrannia Plateau
import { explore } from "../../page_objects/explore/_explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";

describe("Claim Giant Omelette", () => {
  it("Claim Giant Omelette", () => {
    explore.explore(explore.link.tyrannia);
    cy.get(tyranniaJungle.selectors.liPlateauLink).click();
    cy.get(tyranniaPlateau.selectors.liOmelette).click();
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
    // Check if you have already taken the Omelette today, throw error if Sabre appears
  });
});
