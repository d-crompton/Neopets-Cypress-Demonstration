// Wheel of Knowledge in Brightvale - Daily spin

import { explore } from "../../page_objects/explore/_explore";
import { brightvale } from "../../page_objects/explore/Brightvale";

describe("Wheel of Knowledge", () => {
  it("Wheel of Knowledge", () => {
    explore.explore(explore.strings.brightvale);
    cy.get(brightvale.selectors.liWheelOfKnowledge).click();
    // Spin wheel
    // Collect prize
  });
});
