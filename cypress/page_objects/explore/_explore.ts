// PO for the Map of Neopia page that appears when pressing Explore on nav bar
import { createLinkElement } from "../../support/navigation";
import { navigationBar } from "../navigationBar";
import { tyranniaJungle } from "./TyranniaJungle";

class Explore {
  createExploreLink(destination: string) {
    return `a[href*="${destination}/index.phtml"]:first-of-type`;
  }

  selectors = {
    aBrightvale: `a[href*='brightvale']:first-of-type`,
    aFaerieLand: 'a[href$="/faerieland/index.phtml"]:first-of-type',
    aHauntedWoods: 'a[href="/halloween/index.phtml"]:first-child',
    aLostDesert: 'a[href="/desert/index.phtml"]:first-of-type',
    aMaraqua: 'a[href*="water"]:first-of-type',
    aMysteryIsland: 'a[href="/island/index.phtml"]:nth-of-type(1)',
    aNeopiaCentral: 'a[href="/objects.phtml"]:first-child',
    aTerrorMountain: 'a[href="/winter/index.phtml"]:first-of-type',
    aTyrannia: 'a[href="prehistoric/index.phtml"]:nth-of-type(1)',
  };

  strings = {
    brightvale: "Brightvale",
    faerieLand: "FaerieLand",
    hauntedWoods: "HauntedWoods",
    lostDesert: "LostDesert",
    maraqua: "Maraqua",
    mysteryIsland: "MysteryIsland",
    neopiaCentral: "NeopiaCentral",
    terrorMountain: "TerrorMountain",
    tyrannia: "Tyrannia",
  };

  link = {
    brightvale: `a[href*='brightvale']:first-of-type`,
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
