// Functions related to the Pet Care window from the home page
import { hungerStatuses } from "../fixtures/petStatus";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";

// === Feeding Pet === //
// Check if Pet is "hungry" - their hunger status would be in red text
export function isPetHungry(statusText: string): boolean {
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

// Feed Pet Single Item - Split apart for Daily Quest usage
export function feedPetOnce() {
  // Assumes Pet Care window is open
  cy.get(petCareWindow.selectors.feedButton).click();
  cy.get(petCareWindow.selectors.feedItemButton).eq(0).click();
  cy.get(petCareWindow.selectors.feedPetButton).click();
}

// Feed Pet - Recursive function that checks whether a pet is hungry, feeds it and then checks again
export function feedPetRecursive() {
  let boolIsPetHungry = true;
  feedPetOnce();
  // Check if Pet is still hungry
  cy.wait(3000); // Wait for window to update with new status
  cy.get(petCareWindow.selectors.resultStatusText)
    .invoke("text")
    .then((statusText) => {
      let textArray = statusText.split(" ");
      let statusWord = textArray[textArray.length - 1];
      statusWord = statusWord.substring(0, statusWord.length - 1);
      boolIsPetHungry = isPetHungry(statusWord);
      // Return to initial status window
      cy.get(petCareWindow.selectors.resultBackButton).click();
      cy.get(petCareWindow.selectors.feedIntBackButton).click();
      // If pet is still hungry, run the function again
      if (boolIsPetHungry) {
        feedPetRecursive();
      }
    });
}

// === Grooming Pet === //
