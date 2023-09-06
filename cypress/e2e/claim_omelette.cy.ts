// Spec to claim the Giant Omelette in Tyrannia
import { login } from "../support/login";
import { explore } from "../page_objects/explore/explore";
import { tyranniaJungle } from "../page_objects/explore/TyranniaJungle";
import { tyranniaPlateau } from "../page_objects/explore/TyranniaPlateau";

describe("Claim Giant Omelette", () => {
  before(() => {
    login();
  });

  it("Claim Giant Omelette", () => {
    explore.explore("Tyrannia");
    cy.wait(3000);
    cy.get(tyranniaJungle.selectors.liPlateauLink).click();
    cy.wait(3000);
    cy.get(tyranniaPlateau.selectors.liOmelette).click();
    // From this point onwards, many 3rd party services load on the website slowing the process
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
    // TO DO -
    // Check if you have already taken the Omelette today, throw error if Sabre appears
    cy.wait(3000);
  });
});
