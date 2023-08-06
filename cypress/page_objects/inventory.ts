// Page Object file for the Inventory page
class InventoryPage {
  url = "https://www.neopets.com/inventory.phtml";
  selectors = {
    divFoodTab: ".invIcon-food",
    divItemImg: ".item-img",
    dropSelectAction: 'select[name="action"]',
    buttonSelectAction: ".invitem-submit",
  };

  selectAction(action: string) {
    cy.get(this.selectors.dropSelectAction).select(action);
    cy.get(this.selectors.buttonSelectAction).click();
  }
}

const inventoryPage = new InventoryPage();
export { inventoryPage };
