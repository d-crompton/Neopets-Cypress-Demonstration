import { createLinkElement } from "../../support/navigation";

class NeopiaCentral {
  selector = {
    // Money Tree
    liMoneyTree: createLinkElement("", "donations"),
    moneyTreeFirstDonate: ".donated:first-child",
  };

  urls = {
    moneyTree: "donations.phtml",
  };
}

export const neopiaCentral = new NeopiaCentral();
