import { navigationBar } from "./navigationBar";

class NavigationMenu {
  selectors = {
    divInventoryIcon: ".nav-inventory-icon",
  };

  navigateTo(destination: string) {
    // Open the Navigation Menu
    cy.get(navigationBar.selectors.divPetIcon).click();
    // Click the destination link
    switch (destination) {
      case "inventory":
        cy.get(this.selectors.divInventoryIcon).click();
        break;
    }
  }
}

export const navigationMenu = new NavigationMenu();
