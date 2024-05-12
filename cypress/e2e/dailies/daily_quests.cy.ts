import { navigationBar } from "../../page_objects/navigationBar";
import { questLog } from "../../page_objects/questLog";
import { loginUsingSession } from "../../support/login";
import { questFunctions } from "../../support/questFunctions";
import { homePage } from "../../page_objects/homepage/homepage";

describe("Daily Quests", () => {
  it("Daily Quests", () => {
    for (let i = 0; i < 5; i++) {
      cy.get(navigationBar.selectors.divQuestIcon).click();
      questFunctions.identifyAndCompleteQuest();
      questFunctions.redeemQuest();
    }
  });
});
