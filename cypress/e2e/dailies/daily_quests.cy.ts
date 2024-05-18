import { navigationBar } from "../../page_objects/navigationBar";
import { questFunctions } from "../../support/questFunctions";

describe("Daily Quests", () => {
  it("Daily Quests", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(navigationBar.selectors.divQuestIcon).click();
      questFunctions.identifyAndCompleteQuest();
      questFunctions.redeemQuest();
    }
  });
});
