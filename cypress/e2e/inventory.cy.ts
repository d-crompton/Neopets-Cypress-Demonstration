// Open inventory page
import { login } from "../support/login";
import { navigationMenu } from "../page_objects/navigationMenu";
import { inventoryPage } from "../page_objects/inventory";

describe("Open Inventory Page", () => {
  before(() => {
    login();
  });

  it("Open Inventory", () => {
    // Open the Inventory
    navigationMenu.navigateTo("inventory");

    // Interact with food item
    cy.get(inventoryPage.selectors.divFoodTab).click();
    cy.get(inventoryPage.selectors.divItemImg).eq(0).click({ force: true });
    inventoryPage.selectAction("Feed to Azoth_C");
  });
});
