// Collect the first item available form the Money Tree in Neopia Central
import { explore } from "../page_objects/explore/explore";
import { neopiaCentral } from "../page_objects/explore/NeopiaCentral";

describe("Collect from Money Tree", () => {
  it("Collect first item", () => {
    explore.explore(explore.strings.neopiaCentral);
    cy.get(neopiaCentral.selector.liMoneyTree).click();
    cy.get(neopiaCentral.selector.moneyTreeFirstDonate).click();
  });
});