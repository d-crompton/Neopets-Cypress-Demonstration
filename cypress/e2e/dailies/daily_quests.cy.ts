import { navigationBar } from "../../page_objects/navigationBar";
import { loginUsingSession } from "../../support/login";
import { questFunctions } from "../../support/questFunctions";

describe("Daily Quests", () => {
  // beforeEach(() => {
  //   loginUsingSession();
  //   // visit Quest Log URL
  // });

  // for (let i = 0; i < 5; i++) {
  //   it("Daily Quests", () => {
  //     cy.log(i.toString());
  //   });
  // }

  it("TEST", () => {
    cy.get(navigationBar.selectors.divQuestIcon).click();
    questFunctions.identifyAndCompleteQuest();
    cy.pause();
    questFunctions.redeemQuest();
    cy.pause();
  });
});
