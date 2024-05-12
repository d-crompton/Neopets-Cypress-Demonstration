// Functions used to run quests for quest log

/* Possible Quests/Necessary Functions
# Play a Game - Yet to find a game I can easily automate
- Kass Basher - Cannot get a score so cannot submit
# Customise a Pet
# Spin the Wheel (Wheel of Excitement)
*/

import { questLog } from "../page_objects/questLog";
import { feedPetOnce } from "./petCare";
import { navigationBar } from "../page_objects/navigationBar";
import { homePage } from "../page_objects/homepage/homepage";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";
import { explore } from "../page_objects/explore/_explore";
import { neopiaCentral } from "../page_objects/explore/NeopiaCentral";
import { oldNavBar } from "../page_objects/navigationBarOld";
import { hauntedWoods } from "../page_objects/explore/HauntedWoods";

class QuestFunctions {
  identifyAndCompleteQuest() {
    cy.get(questLog.selectors.divTopQuestTitle)
      .invoke("text")
      .then((questTitle) => {
        console.log(questTitle);
        switch (questTitle) {
          case "Feed a Pet":
            this.feedAPet();
            break;
          case "Groom a Pet":
            this.groomAPet();
            break;
          case "Purchase an Item":
            this.purchaseItems();
            break;
          case "Spin the Wheel":
            this.spinTheWheel();
            break;
          case "Play a Game":
            cy.pause();
            break;
          default:
            throw new Error("Unidentified quest!");
        }
      });
  }

  feedAPet() {
    cy.get(navigationBar.selectors.divLogo).click();
    cy.get(homePage.selectors.selectPet.replace("X", "1")).click();
    feedPetOnce();
    cy.get(petCareWindow.selectors.resultStatusExitButton).click();
  }

  groomAPet() {
    cy.get(navigationBar.selectors.divLogo).click();
    cy.get(homePage.selectors.selectPet.replace("X", "1")).click();
    cy.get(petCareWindow.selectors.groomButton).click();
    cy.get(petCareWindow.selectors.petCareItemGridItem).eq(0).click();
    cy.get(petCareWindow.selectors.btnPetCareUseItem).click();
    cy.get(petCareWindow.selectors.resultStatusExitButton).click();
  }

  purchaseItems() {
    // Retrieve how many items are needed, go to General Store and purchase that many items
    cy.get(questLog.selectors.divTopQuestTaskNum)
      .invoke("text")
      .then((text) => {
        let numNeeded = parseInt(text[2]);
        console.log(numNeeded); // DELETE AFTER
        explore.explore(explore.links.neopiaCentral);
        cy.get(neopiaCentral.selectors.liGeneralStore).click();
        for (let i = 1; i <= numNeeded; i++) {
          cy.get(
            neopiaCentral.selectors.inputFoodItem.replace("X", i.toString())
          ).click();
          // Include small random wait?
          cy.get(neopiaCentral.selectors.btnBackToGeneralStore).click();
        }
      });
    cy.get(oldNavBar.selectors.aHomePage).click();
  }

  spinTheWheel() {
    cy.get(questLog.selectors.divTopQuestDesc)
      .invoke("text")
      .then((descText) => {
        // Retrieve wheel name from description (5th word - "Spin the wheel of X")
        const wheelName = descText.split(" ")[4];
        // Spin the chosen wheel
        switch (wheelName) {
          case "Misfortune":
            explore.explore(explore.links.hauntedWoods);
            cy.get(hauntedWoods.selectors.liFairground).click();
            cy.get(hauntedWoods.selectors.liWheelOfMisfortune).click();
            cy.get(hauntedWoods.selectors.divWheelMisfortuneCanvas).click();
            cy.wait(9000);
            cy.get(hauntedWoods.selectors.divWheelMisfortuneCanvas).click();
            break;
          default:
            throw new Error("Wheel not recognised");
        }
      });
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
