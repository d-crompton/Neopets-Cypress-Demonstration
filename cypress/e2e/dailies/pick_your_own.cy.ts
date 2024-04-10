// Pick Your Own - Meridell, Meri Acre Farm

import { meridell } from "../../page_objects/explore/meridell/Meridell";
import { explore } from "../../page_objects/explore/_explore";
import { pickYourOwn } from "../../page_objects/explore/meridell/PickYourOwn";

// Pick 6 berries
describe("Pick Your Own", () => {
  it("Pick Berries", () => {
    // Explore to Meridell
    explore.explore(explore.links.meridell);
    // Meri Acres Farm
    cy.get(meridell.selectors.liMeriAcresFarm).click();
    // Pick Your Own
    cy.get(meridell.selectors.liPickYourOwn).click();
    // Click to Play!
    cy.get(pickYourOwn.selectors.btnPlay).click();
    cy.pause();
    /* 
    Game
    */
    pickYourOwn.locateAndMoveToStartMap();
    pickYourOwn.playPickYourOwnGame();
    cy.pause();
  });
});
