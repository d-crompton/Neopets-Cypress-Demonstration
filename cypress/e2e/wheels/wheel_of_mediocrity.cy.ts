// In Tyrannia Jungle - Cooldown of X hours, costs 100 NP
import { explore } from "../../page_objects/explore/explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";

describe("Wheel of Mediocrity", () => {
  it("Wheel of Mediocrity", () => {
    explore.explore(explore.strings.tyrannia);
    cy.get(tyranniaJungle.selectors.liWheelMediocrity).click();
    // Check if you're redirected to the message saying you can't spin now
    // Message appears in .container p on https://www.neopets.com/prehistoric/mediocrity.phtml
    cy.get(tyranniaJungle.selectors.btnSpinWheelMediocrity).click();
    // Once the wheel stops spinning, click the wheel to collect prize
  });
});
