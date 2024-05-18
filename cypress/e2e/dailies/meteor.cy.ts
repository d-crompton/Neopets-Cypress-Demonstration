import { kredulor } from "../../page_objects/explore/Kredulor";

describe("Giant Meteor", () => {
  it("Giant Meteor", () => {
    cy.visit(kredulor.urls.meteor);
    // Check if the meteor is gone
    cy.get(kredulor.selectors.pMeteor)
      .invoke("text")
      .then((text) => {
        if (text.includes(kredulor.strings.itsGone)) {
          throw new Error("Error - The Meteor is gone");
        }
      });
    cy.get(kredulor.selectors.btnMeteorTakeChance).click();
    cy.get(kredulor.selectors.selectMeteor).select(1);
    cy.get(kredulor.selectors.btnMeteorSubmit).click();
  });
});
