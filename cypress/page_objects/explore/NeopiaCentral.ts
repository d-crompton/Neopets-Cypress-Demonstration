import { createLinkElement } from "../../support/navigation";

class NeopiaCentral {
  selector = {
    // General Store
    liGeneralStore: createLinkElement("generalstore"),
    inputFoodItem: `.contentModule:nth-of-type(1) td[align="center"]:nth-of-type(X) input`,
    btnBackToGeneralStore: 'input[type="button"]:first-of-type',
    // Money Tree
    liMoneyTree: createLinkElement("donations"),
    moneyTreeFirstDonate: ".donated:first-child",
  };

  urls = {
    moneyTree: "donations.phtml",
  };
}

export const neopiaCentral = new NeopiaCentral();
