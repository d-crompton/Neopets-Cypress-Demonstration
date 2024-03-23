import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/_explore";

describe("Grundo Plushie", () => {
  it("Grundo Plushie", () => {
    explore.explore(explore.strings.faerieLand);
    cy.get(faerieLand.selectors.liGrundoPlushie).click();
    cy.get(faerieLand.selectors.btnTalkToPlushie).click();
  });
});
