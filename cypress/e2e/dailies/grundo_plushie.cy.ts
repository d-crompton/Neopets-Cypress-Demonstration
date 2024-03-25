import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/_explore";

describe("Grundo Plushie", () => {
  it("Grundo Plushie", () => {
    explore.explore(explore.strings.faerieLand);
    cy.get(faerieLand.selectors.liGrundoPlushie).click();
    cy.get(faerieLand.selectors.btnTalkToPlushie).click();
    // Error - Throw error if you've already visited plushie today
    // Check if #container__2020 p appears even if the talk is successful - if so use its contents
  });
});
