import { explore } from "../../page_objects/explore/_explore";
import { faerieCaverns } from "../../page_objects/explore/faerieland/FaerieCaverns";
import { faerieLand } from "../../page_objects/explore/faerieland/FaerieLand";

describe("Faerie Caverns", () => {
  it("Faerie Caverns", () => {
    explore.explore(explore.links.faerieLand);
    cy.get(faerieLand.selectors.liCaverns).click();
    cy.get(faerieCaverns.selectors.btnCavernsEnter).click();
    // Exploring...
    faerieCaverns.exploreCaverns();
    // cy.pause();
    // Return to Faerieland after hitting Dead End or Treasure
    cy.get(faerieCaverns.selectors.btnReturn).click();
  });
});
