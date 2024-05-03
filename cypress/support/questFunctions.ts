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

import { questLog } from "../page_objects/questLog";
import { feedPetOnce } from "./petCare";
import { navigationBar } from "../page_objects/navigationBar";
import { homePage } from "../page_objects/homepage/homepage";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";

class QuestFunctions {
  feedAPet() {
    cy.get(navigationBar.selectors.divLogo).click();
    cy.get(homePage.selectors.selectPet.replace("X", "1")).click();
    feedPetOnce();
  }

  groomAPet() {
    cy.get(navigationBar.selectors.divLogo).click();
    cy.get(homePage.selectors.selectPet.replace("X", "1")).click();
    cy.get(petCareWindow.selectors.groomButton).click();
    cy.get(petCareWindow.selectors.petCareItemGridItem).eq(0).click();
    cy.get(petCareWindow.selectors.btnPetCareUseItem).click();
    cy.get(petCareWindow.selectors.resultStatusExitButton).click();
  }

  redeemQuest() {
    // Return to Quest Log
    cy.get(navigationBar.selectors.divQuestIcon).click();
    cy.get(questLog.selectors.btnClaimReward).click();
    cy.get(questLog.selectors.btnBackToQuests).click();
  }

  claimDailyReward() {
    cy.get(questLog.selectors.divDailyBonus).click();
  }
}

export const questFunctions = new QuestFunctions();
