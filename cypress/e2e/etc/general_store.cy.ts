// General Store - Neopia Central
// Buy one of each food item from the Neopia Central General Store
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";
import { explore } from "../../page_objects/explore/_explore";

describe("Visit General Store", () => {
  it("Visit General Store", () => {
    explore.explore(explore.link.neopiaCentral);
    cy.get(neopiaCentral.selector.liGeneralStore).click();
    let foodItem = neopiaCentral.selector.inputFoodItem;
    for (let i = 1; i <= 5; i++) {
      cy.get(foodItem.replace("X", i.toString())).click();
      // Cypress will automatically click "OK" to confirm purchase
      cy.get(neopiaCentral.selector.btnBackToGeneralStore).click();
    }
  });
});
