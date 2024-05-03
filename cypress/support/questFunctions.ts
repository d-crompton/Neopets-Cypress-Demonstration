// Functions used to run quests for quest log

// Need function to redeem quests

/* Possible Quests/Necessary Functions
# Purchase an Item (Purchase 3 items)
-- Purchase item(s) from any Neopian Shop - Purchase 1
# Spin the Wheel (Wheel of Misfortune)
# Groom a Pet - (With Grooming item) - Can groom from the homepage pet care window
# Feed a Pet
# Play a Game - Yet to find a game I can easily automate
*/

import { feedPetOnce } from "./petCare";
import { navigationBar } from "../page_objects/navigationBar";
import { homePage } from "../page_objects/homepage/homepage";

export function feedAPet() {
  // Navigate to the homepage
  cy.get(navigationBar.selectors.divLogo).click();
  // Open care window
  cy.get(homePage.selectors.selectPet.replace("X", "1")).click();
  cy.pause();
  feedPetOnce();
}

function redeemQuest() {
  // If done sequentially, the current quest will always be at the top
}
