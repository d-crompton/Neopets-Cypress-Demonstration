// Use Repeating Function
// Check what image has appeared and carry out action based on that
// RANDOM - Go left or right
// Check if Left or Right appears (probably just check for one) then select
// Check if "Check what you've found" button (or the treasure image appears)

import { explore } from "../../page_objects/explore/_explore";
import { faerieCaverns } from "../../page_objects/explore/faerieland/FaerieCaverns";
import { faerieLand } from "../../page_objects/explore/faerieland/FaerieLand";

describe("Faerie Caverns", () => {
  it("Faerie Caverns", () => {
    explore.explore(faerieLand.area);
    cy.get(faerieLand.selectors.liCaverns).click();
    cy.get(faerieCaverns.selectors.btnCavernsEnter).click();
  });
});
