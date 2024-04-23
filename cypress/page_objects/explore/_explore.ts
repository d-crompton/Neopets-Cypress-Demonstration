// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { navigationBar } from "../navigationBar";
import { faerieLand } from "./FaerieLand";
import { hauntedWoods } from "./HauntedWoods";
import { lostDesert } from "./LostDesert";
import { maraqua } from "./Maraqua";
import { meridell } from "./meridell/Meridell";
import { mysteryIsland } from "./MysteryIsland";
import { terrorMountain } from "./TerrorMountain";
import { tyranniaJungle } from "./TyranniaJungle";

class Explore {
  createExploreLink(destination: string) {
    return `a[href*="${destination}/index.phtml"]:first-of-type`;
  }

  links = {
    brightvale: `a[href*='brightvale']:first-of-type`,
    faerieLand: this.createExploreLink(faerieLand.area),
    hauntedWoods: this.createExploreLink(hauntedWoods.area),
    lostDesert: this.createExploreLink(lostDesert.area),
    meridell: this.createExploreLink(meridell.area),
    maraqua: this.createExploreLink(maraqua.area),
    mysteryIsland: this.createExploreLink(mysteryIsland.area),
    neopiaCentral: 'a[href="/objects.phtml"]:first-child',
    tyrannia: this.createExploreLink(tyranniaJungle.area),
    terrorMountain: this.createExploreLink(terrorMountain.area),
  };

  explore(link: string) {
    cy.get(navigationBar.selectors.divExplore).click();
    cy.wait(3000);
    // Resolve "obj.callOnLoad is not a function" error that appears
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    cy.get(link).click({ force: true });
  }
}
export const explore = new Explore();
