import { createLinkElement } from "../../support/navigation";

class MysteryIsland {
  area = "island";

  selector = {
    // Tombola
    liTombola: createLinkElement("tombola"),
    inputPlayTomabola: 'input[value="Play Tombola!"]',
  };

  urls = {
    tombola: "island/tombola.phtml",
  };
}

export const mysteryIsland = new MysteryIsland();
