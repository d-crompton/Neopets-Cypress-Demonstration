// Jhudora's Bluff Faerie Quest - Faerieland
import { explore } from "../../page_objects/explore/_explore";
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";

describe("Jhudora's Bluff", () => {
  it("Jhudora's Bluff", () => {
    explore.explore(explore.links.faerieLand);
    cy.get(faerieLand.selectors.liJhudora).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept1).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept2).click();
    cy.get(faerieLand.selectors.bJhudoraItem)
      .invoke("text")
      .then((itemName) => {
        // Go get item
        console.log(itemName);
        cy.visit(neopiaCentral.urls.shopWizardSearch);
        cy.get(neopiaCentral.selectors.inputShopWizard).type(itemName);
        cy.get(neopiaCentral.selectors.divWizardSubmit).click();
        // Throw an error if the item is not available - or try resubmitting
        cy.get(neopiaCentral.selectors.aShopFirstResult).click();
        cy.get(neopiaCentral.selectors.aHighlightedItem).click();
      });
    cy.pause();

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
