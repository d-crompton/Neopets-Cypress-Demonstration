class NavigationBar {
  selectors = {
    divLogo: ".nav-logo__2020",
    divPetIcon: ".nav-pet-menu-icon__2020",
    aGamesLink: ".nav-games-link__2020",
    divExplore: ".nav-top__2020 .nav-explore__2020",
    divExploreDropdown: "#exploredropdown__2020 .explore-icon",
    divQuestIcon: ".nav-quest-icon__2020",
    divBellIcon: '[class^="nav-bell"]',
    // Alerts
    divAlerts: "#alerts",
    liFirstAlert: "#alerts > ul > li:first-of-type a",
    aViewAll: 'a[href^="/allevents"]',
    // View All
    allAlertsContent: ".content div:nth-child(2)",
    tableAlerts: 'table[align="center"]',
    aAlertFirstRow: "tr:nth-child(2) td:nth-child(2) a",
  };
}

export const navigationBar = new NavigationBar();
