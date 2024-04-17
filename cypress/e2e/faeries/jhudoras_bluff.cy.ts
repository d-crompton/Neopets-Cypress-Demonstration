// Jhudora's Bluff Faerie Quest - Faerieland
import { explore } from "../../page_objects/explore/_explore";
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";
import { oldNavBar } from "../../page_objects/navigationBarOld";

describe("Jhudora's Bluff", () => {
  it("Jhudora's Bluff", () => {
    // Accepting Quest
    explore.explore(explore.links.faerieLand);
    cy.get(faerieLand.selectors.liJhudora).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept1).click();
    cy.get(faerieLand.selectors.btnJhudoraAccept2).click();
    cy.get(faerieLand.selectors.bJhudoraItem)
      .invoke("text")
      .then((itemName) => {
        // Buying Item
        cy.visit(neopiaCentral.urls.shopWizardSearch);
        cy.get(neopiaCentral.selectors.inputShopWizard).type(itemName);
        cy.get(neopiaCentral.selectors.divWizardSubmit).click();
        // Throw an error if the item is not available - or try resubmitting
        cy.get(neopiaCentral.selectors.aShopFirstResult).click();
        cy.get(neopiaCentral.selectors.aHighlightedItem).click();
      });

    // Redeeming Quest
    cy.get(oldNavBar.selectors.imgExploreLink).click();
    cy.get(explore.links.faerieLand).click();
    // Replace this explore with the classic site layout
    cy.get(faerieLand.selectors.liJhudora).click();
    cy.get(faerieLand.selectors.btnJhudoraSubmit).click();
  });
});
