import { createLinkElement } from "../../support/navigation";

class LostDesert {
  area = "desert";

  selectors = {
    // Sakhmet
    liSakhmet: createLinkElement(this.area, "sakhmet"),
    liFruitMachine: createLinkElement(this.area, "fruit/index"),
    btnSpinFruitMachine: 'input[value*="spin"]',
  };

  urls = {
    fruitMachine: "desert/fruit/index.phtml",
  };
}

export const lostDesert = new LostDesert();
