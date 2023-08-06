class NavigationMenu {
  selectors = {
    divPetIcon: ".nav-pet-menu-icon__2020",
    divInventoryIcon: ".nav-inventory-icon",
  };

  navigateTo(destination: string) {
    // Open the Navigation Menu
    cy.get(navigationMenu.selectors.divPetIcon).click();
    // Click the destination link
    switch (destination) {
      case "inventory":
        cy.get(this.selectors.divInventoryIcon).click();
        break;
    }
  }
}

export const navigationMenu = new NavigationMenu();
