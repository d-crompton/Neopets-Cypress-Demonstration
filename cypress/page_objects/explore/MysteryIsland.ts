import { createLinkElement } from "../../support/navigation";

class MysteryIsland {
  area = "island";

  selectors = {
    // Tombola
    liTombola: createLinkElement("tombola"),
    inputPlayTomabola: 'input[value="Play Tombola!"]',
    // Deserted Tomb
    liGeraptiku: createLinkElement("geraptiku"),
    liDesertedTomb: createLinkElement("tomb"),
    btnOpenDoor: 'input[value*="Open"]',
    btnContinueOn: 'input[value*="Continue"]',
    btnLeave: 'input[value="Leave"]',
  };

  urls = {
    tombola: "island/tombola.phtml",
  };
}

export const mysteryIsland = new MysteryIsland();
