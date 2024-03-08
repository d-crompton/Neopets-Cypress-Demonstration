// A single test file containing all the different dailies
// Rather than using "Explore", this test will use direct links
import { jellyWorld } from "../../page_objects/explore/JellyWorld";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";
import { loginSession } from "../../support/login";

describe("Dailies", () => {
  beforeEach(() => {
    loginSession();
  });
  it("Giant Jelly", () => {
    cy.visit(jellyWorld.strings.giantJellyLink);
    cy.get(jellyWorld.selector.btnGiantJellyGrab).click();
  });

  it("Giant Omelette", () => {
    cy.visit(tyranniaPlateau.strings.OmeletteUrl).click();
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
  });
});
