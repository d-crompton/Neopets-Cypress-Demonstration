// The Discarded Magical Blue Grundo Plushie of Prosperity - Faerieland
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/_explore";

describe("Grundo Plushie", () => {
  it("Grundo Plushie", () => {
    explore.explore(explore.link.faerieLand);
    cy.get(faerieLand.selectors.liGrundoPlushie).click();
    cy.get(faerieLand.selectors.btnTalkToPlushie).click();
    cy.get(faerieLand.selectors.pGrundoText)
      .invoke("text")
      .then((text) => {
        if (text.includes(faerieLand.strings.alreadyVisitedGrundo)) {
          throw new Error(
            "You've already visited Grundo today. Visit again tomorrow"
          );
        }
      });
  });
});
