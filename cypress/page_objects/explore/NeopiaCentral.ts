import { createLinkElement } from "../../support/navigation";

class NeopiaCentral {
  selectors = {
    // General Store
    liGeneralStore: createLinkElement("generalstore"),
    inputFoodItem: `.contentModule:nth-of-type(1) td[align="center"]:nth-of-type(X) input`,
    btnBackToGeneralStore: 'input[type="button"]:first-of-type',
    // Money Tree
    liMoneyTree: createLinkElement("donations"),
    moneyTreeFirstDonate: ".donated:first-child",
    btnMoneyTreeInventory: 'a[href*="inventory"] button',
    btnMoneyTreeBack: 'a[href*="donations"] button',
    // Shop Wizard
    inputShopWizard: "#shopwizard",
    divWizardSubmit: "#submit_wizard",
    aShopFirstResult: ".wizard-results-grid li:nth-child(2) a",
    aHighlightedItem: 'div[style*="center"] a img', // Item highlighted at the top of the shop
  };

  strings = {
    moneyTreeBackTryAgain: "Oh well... Try Again",
  };

  urls = {
    moneyTree: "donations.phtml",
    shopWizardSearch: "shops/wizard.phtml",
  };

  // Collects 10 items and will attempt each collection 3 times before moving on
  // Recursive function used as cannot use loop "break" inside .then()
  collectMoneyTree(iteration: number, attempt: number): void {
    console.log(`Iteration: ${iteration}, Attempt: ${attempt}`);
    cy.log(`Iteration: ${iteration}`);
    cy.get(neopiaCentral.selectors.moneyTreeFirstDonate).click();
    cy.get(neopiaCentral.selectors.btnMoneyTreeBack)
      .invoke("text")
      .then((text) => {
        if (text !== this.strings.moneyTreeBackTryAgain) {
          cy.wait(Math.random() * 5000); // Wait for a random small amount to make it seem less bot-like
          cy.get(this.selectors.btnMoneyTreeBack).click();
          if (iteration < 10) {
            this.collectMoneyTree(iteration + 1, 1);
          }
        } else {
          cy.wait(Math.random() * 5000);
          cy.get(this.selectors.btnMoneyTreeBack).click();
          this.collectMoneyTree(iteration, attempt + 1);
        }
      });
  }
}

export const neopiaCentral = new NeopiaCentral();
