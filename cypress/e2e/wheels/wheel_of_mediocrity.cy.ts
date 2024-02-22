// In Tyrannia Jungle - Cooldown of 40 minutes, costs 100 NP
import { explore } from "../../page_objects/explore/explore";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";

describe("Wheel of Mediocrity", () => {
  it("Wheel of Mediocrity", () => {
    explore.explore(explore.strings.tyrannia);
    cy.get(tyranniaJungle.selectors.liWheelMediocrity).click();
    // Check if you're redirected to the message saying you can't spin now
    cy.get(tyranniaJungle.selectors.pWheelMediocrityText)
      .invoke("text")
      .then((text) => {
        if (
          text.includes(tyranniaJungle.string.wheelMediocrityCantSpinNowText)
        ) {
          throw new Error(
            "Custom Error - You have already span the wheel in the last 40 minutes"
          );
        }
      });
    // Spin the wheel
    cy.get(tyranniaJungle.selectors.btnSpinWheelMediocrity).click();
    // Once the wheel stops spinning, click the wheel to collect prize
    // Can press the middle of the wheel (the shell) - should work by default but will need to test
    cy.get(tyranniaJungle.selectors.divWheelMediocrityCanvas).click();
  });
});
