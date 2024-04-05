// Money Tree - Neopia Central
// Collect 10 items from the Money Tree, the daily maximum
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";

describe("Collect from Money Tree", () => {
  it("Collect items", () => {
    cy.visit(neopiaCentral.urls.moneyTree);
    neopiaCentral.collectMoneyTree(1, 1);
  });
});
