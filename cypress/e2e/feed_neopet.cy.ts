// Open inventory page and feed with the first food item in the Food tab
import { navigationMenu } from "../page_objects/navigationMenu";
import { inventoryPage } from "../page_objects/inventory";

describe("Open Inventory Page", () => {
  it("Open Inventory", () => {
    // Open the Inventory
    navigationMenu.navigateTo("inventory");
    // Interact with food item
    cy.get(inventoryPage.selectors.divFoodTab).click();
    cy.get(inventoryPage.selectors.divItemImg).eq(0).click({ force: true });
    inventoryPage.selectAction("Feed to Azoth_C"); // Update with a way to change neopet name
  });
});
