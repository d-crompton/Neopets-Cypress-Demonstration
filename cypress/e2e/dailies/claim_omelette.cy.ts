// Giant Omelette - Tyrannia Plateau
import { explore } from "../../page_objects/explore/_explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";

describe("Claim Giant Omelette", () => {
  it("Claim Giant Omelette", () => {
    explore.explore(explore.links.tyrannia);
    cy.get(tyranniaJungle.selectors.liPlateauLink).click();
    cy.get(tyranniaPlateau.selectors.liOmelette).click();
    // Check if the omelette is there
    cy.get("body").then((body) => {
      if (!body.find(tyranniaPlateau.selectors.imgOmelette)) {
        throw new Error("Omelette is gone!!!");
      }
    });
    // Attempt to claim some omelette
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
    // Check if you've already taken some omelette today
    cy.get("body").then((body) => {
      if (body.find(tyranniaPlateau.selectors.imgSabreX)) {
        throw new Error("You've already taken some omelette today!");
      }
    });
  });
});
