class NavigationBar {
  selectors = {
    divPetIcon: ".nav-pet-menu-icon__2020",
    divExplore: ".nav-top__2020 .nav-explore__2020",
    divBellIcon: '[class^="nav-bell"]',
    // Alerts
    liFirstAlert: "#alerts > ul > li:first-of-type a",
  };
}

export const navigationBar = new NavigationBar();
