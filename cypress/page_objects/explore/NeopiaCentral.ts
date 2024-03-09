class NeopiaCentral {
  selector = {
    liMoneyTree: `li[onclick="location.href = '/donations.phtml'"]`,
    moneyTreeFirstDonate: ".donated:first-child",
  };

  urls = {
    moneyTree: "donations.phtml",
  };
}

export const neopiaCentral = new NeopiaCentral();
