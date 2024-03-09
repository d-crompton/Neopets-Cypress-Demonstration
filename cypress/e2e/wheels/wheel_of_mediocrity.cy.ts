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
          text.includes(tyranniaJungle.strings.wheelMediocrityCantSpinNowText)
        ) {
          throw new Error(
            "Custom Error - You have already span the wheel in the last 40 minutes"
          );
        }
      });
    // Spin the wheel and collect the prize
    cy.wait(3000);
    cy.get(tyranniaJungle.selectors.btnSpinWheelMediocrity).click();
    cy.wait(9000);
    cy.get(tyranniaJungle.selectors.divWheelMediocrityCanvas).click();
  });
});
