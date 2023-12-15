// Feed all pets via the homepage

import { homePage } from "../page_objects/homepage/homepage";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";
import { isPetHungry } from "../support/petStatus";

// To-Do - Test when the pets are hungry

describe("Feed All Neopets", () => {
  it("Feed pet", () => {
    cy.get(homePage.selectors.divPet).each((divPet) => {
      let boolIsPetHungry = false;
      // Select the Pet
      cy.wrap(divPet).click();
      cy.wait(2000); // Without wait, it checks for a hidden (perhaps not loaded) "dying" value
      // Initial check of the Pet's Hunger Status
      cy.get(petCareWindow.selectors.petHungerStatus)
        .invoke("text")
        .then((petStatus) => {
          boolIsPetHungry = isPetHungry(petStatus);
        });
      // Start feeding the Pet if they are hungry
      if (boolIsPetHungry) {
        cy.get(petCareWindow.selectors.feedButton).click(); // "Feed" button
        do {
          // Selecting item and the "Feed Pet" button
          cy.get(petCareWindow.selectors.feedItemButton).eq(0).click();
          cy.get(petCareWindow.selectors.feedPetButton).click();
          // Check if Pet is still hungry
          cy.get(petCareWindow.selectors.resultStatusText)
            .invoke("text")
            .then((petStatus2) => {
              console.log(petStatus2);
              boolIsPetHungry = isPetHungry(petStatus2);
              console.log("Pet's New Status is: " + petStatus2);
            });
          // If Pet is still hungry, return to available items,
          // if not close pet window ready for next pet
          if (boolIsPetHungry) {
            cy.get(petCareWindow.selectors.resultBackButton).click();
          } else {
            cy.get(petCareWindow.selectors.resultExitButton).click();
          }
        } while (boolIsPetHungry);
      }
    });
  });
});
