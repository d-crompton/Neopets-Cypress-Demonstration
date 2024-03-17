import { createLinkElement } from "../../support/navigation";

class NeopiaCentral {
  selector = {
    // liMoneyTree: `li[onclick="location.href = '/donations.phtml'"]`,
    liMoneyTree: createLinkElement("", "donations"),
    moneyTreeFirstDonate: ".donated:first-child",
  };

  urls = {
    moneyTree: "donations.phtml",
  };
}

export const neopiaCentral = new NeopiaCentral();
