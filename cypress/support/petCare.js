// Functions related to the Pet Care window from the home page
import { hungerStatuses } from "../fixtures/petStatus";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";

// Check if Pet is "hungry" - their hunger status would be in red text
export function isPetHungry(statusText) {
  console.log("isPetHungry statusText: " + statusText);
  // Once arrays created, check using the arrays (.includes?)
  if (hungerStatuses.notHungryValues.includes(statusText)) {
    console.log("isPetHungry returning FALSE");
    return false;
  } else {
    console.log("isPetHungry returning TRUE");
    return true;
  }
}

// Feed Pet - Recursive function that checks whether a pet is hungry, feeds it and then checks again
export function feedPet() {
  let boolIsPetHungry = true;
  console.log("Neopet hungry");
  // Feeding Neopet - then checking if it needs feeding again
  console.log("Feeding neopet");
  cy.get(petCareWindow.selectors.feedButton).click();
  cy.get(petCareWindow.selectors.feedItemButton).eq(0).click();
  cy.get(petCareWindow.selectors.feedPetButton).click();
  // Check if Pet is still hungry
  console.log("Checking if Neopet still hungry");
  cy.get(petCareWindow.selectors.resultStatusText)
    .invoke("text")
    .then((statusText) => {
      let textArray = statusText.split(" ");
      let statusWord = textArray[textArray.length - 1];
      statusWord = statusWord.substring(0, statusWord.length - 1);
      console.log(`New status: ${statusWord}`);
      boolIsPetHungry = isPetHungry(statusWord);
      // Return to initial status window
      cy.get(petCareWindow.selectors.resultBackButton).click();
      cy.get(petCareWindow.selectors.feedIntBackButton).click();
      // If pet is still hungry, run the function again
      if (boolIsPetHungry) {
        console.log("Running feedPet again...");
        feedPet();
      }
    });
}
