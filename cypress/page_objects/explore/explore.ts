// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { navigationBar } from "../navigationBar";

class Explore {
  selectors = {
    aFaerieLand: 'a[href$="/faerieland/index.phtml"]:first-of-type',
    aHauntedWoods: 'a[href="/halloween/index.phtml"]:first-child',
    aMysteryIsland: 'a[href="/island/index.phtml"]:nth-of-type(1)',
    aNeopiaCentral: 'a[href="/objects.phtml"]:first-child',
    aTerrorMountain: 'a[href="/winter/index.phtml"]:first-of-type',
    aTyrannia: 'a[href="prehistoric/index.phtml"]:nth-of-type(1)',
  };

  strings = {
    faerieLand: "FaerieLand",
    hauntedWoods: "HauntedWoods",
    mysteryIsland: "MysteryIsland",
    neopiaCentral: "NeopiaCentral",
    terrorMountain: "TerrorMountain",
    tyrannia: "Tyrannia",
  };

  explore(destination: string) {
    cy.get(navigationBar.selectors.divExplore).click();
    cy.wait(3000);
    // Resolve "obj.callOnLoad is not a function" error that appears
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    cy.get(this.selectors["a" + destination]).click({ force: true });
  }
}
export const explore = new Explore();
