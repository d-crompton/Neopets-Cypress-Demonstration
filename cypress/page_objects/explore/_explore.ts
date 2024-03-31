// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { navigationBar } from "../navigationBar";
import { faerieLand } from "./FaerieLand";
import { hauntedWoods } from "./HauntedWoods";
import { lostDesert } from "./LostDesert";
import { maraqua } from "./Maraqua";
import { mysteryIsland } from "./MysteryIsland";
import { tyranniaJungle } from "./TyranniaJungle";

class Explore {
  createExploreLink(destination: string) {
    return `a[href*="${destination}/index.phtml"]:first-of-type`;
  }

  selectors = {
    // aMysteryIsland: 'a[href="/island/index.phtml"]:nth-of-type(1)',
    aNeopiaCentral: 'a[href="/objects.phtml"]:first-child',
    aTerrorMountain: 'a[href="/winter/index.phtml"]:first-of-type',
  };

  strings = {
    // mysteryIsland: "MysteryIsland",
    neopiaCentral: "NeopiaCentral",
    terrorMountain: "TerrorMountain",
  };

  link = {
    brightvale: `a[href*='brightvale']:first-of-type`,
    faerieLand: this.createExploreLink(faerieLand.area),
    hauntedWoods: this.createExploreLink(hauntedWoods.area),
    lostDesert: this.createExploreLink(lostDesert.area),
    maraqua: this.createExploreLink(maraqua.area),
    mysteryIsland: this.createExploreLink(mysteryIsland.area),
    tyrannia: this.createExploreLink(tyranniaJungle.area),
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
