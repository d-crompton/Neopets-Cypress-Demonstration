import { createLinkElement } from "../../support/navigation";

class LostDesert {
  area = "desert";

  selectors = {
    // Coltzans Shrine
    liColtzans: createLinkElement("shrine"),
    btnApproachShrine: 'input[value^="Approach"]',
    // Sakhmet
    liSakhmet: createLinkElement("sakhmet"),
    liFruitMachine: createLinkElement("fruit/index"),
    btnSpinFruitMachine: 'input[value*="spin"]',
  };

  urls = {
    coltzansShrine: "desert/shrine.phtml",
    fruitMachine: "desert/fruit/index.phtml",
  };
}

export const lostDesert = new LostDesert();
