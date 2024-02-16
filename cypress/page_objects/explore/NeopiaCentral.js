class NeopiaCentral {
  selector = {
    liMoneyTree: `li[onclick="location.href = '/donations.phtml'"]`,
    moneyTreeFirstDonate: ".donated:first-child",
  };
}

export const neopiaCentral = new NeopiaCentral();
