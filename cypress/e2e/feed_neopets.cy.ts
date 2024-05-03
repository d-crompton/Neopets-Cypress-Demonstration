// Feed all pets via the homepage
import { homePage } from "../page_objects/homepage/homepage";
import { petCareWindow } from "../page_objects/homepage/petCareWindow";
import { isPetHungry } from "../support/petCare";
import { feedPetRecursive } from "../support/petCare";

describe("Feed All Neopets", () => {
  it("Feed pet", () => {
    cy.get(homePage.selectors.divPet).each((divPet) => {
      let boolIsPetHungry = false;
      // Select the Pet
      cy.wrap(divPet).click({ timeout: 2000 });
      cy.wait(2000); // Without wait, it checks for a hidden (perhaps not loaded) "dying" value
      // Initial check of the Pet's Hunger Status
      cy.get(petCareWindow.selectors.petHungerStatus)
        .invoke("text")
        .then((petStatus) => {
          console.log(`Pet Status: ${petStatus}`);
          boolIsPetHungry = isPetHungry(petStatus);
        })
        .then(() => {
          if (boolIsPetHungry) {
            feedPetRecursive();
            cy.get(petCareWindow.selectors.petStatusExit).click();
          } else {
            // Pet not hungry - moving onto next Neopet
            cy.get(petCareWindow.selectors.petStatusExit).click();
          }
        });
    });
  });
});
