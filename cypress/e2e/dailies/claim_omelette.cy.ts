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
    cy.get("body").then((body) => {
      // If Sabre-X appears, one of the two errors will appear
      if (body.find(tyranniaPlateau.selectors.bSabreX)) {
        throw new Error(`Error`);
      }
    });
  });
});
