// Money Tree - Neopia Central
// Collect the first item
import { explore } from "../../page_objects/explore/_explore";
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";

describe("Collect from Money Tree", () => {
  it("Collect first item", () => {
    explore.explore(explore.links.neopiaCentral);
    cy.get(neopiaCentral.selector.liMoneyTree).click();
    cy.get(neopiaCentral.selector.moneyTreeFirstDonate).click();
  });
});
