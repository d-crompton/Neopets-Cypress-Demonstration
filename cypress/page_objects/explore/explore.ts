// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { navigationBar } from "../navigationBar";

class Explore {
  selectors = {
    aTyrannia: 'a[href="prehistoric/index.phtml"]:nth-of-type(1)',
  };

  explore(destination: string) {
    cy.get(navigationBar.selectors.divExplore).click();
    cy.wait(5000);
    // Resolve "obj.callOnLoad is not a function" error that appears
    // Possible add a do while loop with a Try/Else inside.
    // Add a wait in the else
    console.log(this.selectors["a" + destination]);
    cy.get(this.selectors["a" + destination]).click();
  }
}
export const explore = new Explore();
