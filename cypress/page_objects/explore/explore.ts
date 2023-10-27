// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { navigationBar } from "../navigationBar";

class Explore {
  selectors = {
    aMysteryIsland: 'a[href="/island/index.phtml"]:nth-of-type(1)',
    aTyrannia: 'a[href="prehistoric/index.phtml"]:nth-of-type(1)',
  };

  strings = {
    mysteryIsland: "MysteryIsland",
    tyrannia: "Tyrannia",
  };

  explore(destination: string) {
    cy.get(navigationBar.selectors.divExplore).click();
    cy.wait(5000);
    // Resolve "obj.callOnLoad is not a function" error that appears
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    cy.get(this.selectors["a" + destination]).click();
  }
}
export const explore = new Explore();
