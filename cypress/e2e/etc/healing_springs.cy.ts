// Healing Springs - Faerieland - 30 minute cooldown
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { explore } from "../../page_objects/explore/_explore";

describe("Visit Healing Springs", () => {
  it("Visit Healing Springs", () => {
    explore.explore(explore.strings.faerieLand);
    cy.get(faerieLand.selectors.liHealingSprings).click();
    cy.get(faerieLand.selectors.btnHealMyPets).click();
    cy.get(faerieLand.selectors.pAfterHealMyPets)
      .invoke("text")
      .then((text) => {
        if (text.includes("Sorry!")) {
          throw new Error(
            "Custom Error - You have already used the springs in the last 30 minutes"
          );
        }
      });
  });
});
