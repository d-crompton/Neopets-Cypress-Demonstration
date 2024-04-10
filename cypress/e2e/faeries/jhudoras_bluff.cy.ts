// Jhudora's Bluff Faerie Quest - Faerieland
import { explore } from "../../page_objects/explore/_explore";
import { faerieLand } from "../../page_objects/explore/FaerieLand";

describe("Jhudora's Bluff", () => {
  it("Jhudora's Bluff", () => {
    explore.explore(faerieLand.area);
    cy.get(faerieLand.selectors.liJhudora).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept1).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept2).click();
    cy.get(faerieLand.selectors.bJhudoraItem)
      .invoke("text")
      .then((text) => {
        // Go get item
      });

    /* Getting Item
      https://www.neopets.com/shops/wizard.phtml 
      #shopwizard < input for item name
      #submit_wizard < magnifying glass button
      .wizard-results-grid li:nth-child(2) a < first result row with a player's shop (and its link)
      div[style*="center"] a < item highlighted at the top of the shop
    */

    /* Returning to Jhudora
      // Yes I have it
      */
  });
});
