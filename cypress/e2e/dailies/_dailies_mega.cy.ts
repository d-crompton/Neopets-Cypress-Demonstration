// A single test file containing all the different dailies (and timed activties)
// Rather than using "Explore", this test will use direct links
import { loginUsingSession } from "../../support/login";
import { hauntedWoods } from "../../page_objects/explore/HauntedWoods";
import { jellyWorld } from "../../page_objects/explore/JellyWorld";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";
import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";

describe("Dailies", () => {
  beforeEach(() => {
    loginUsingSession();
  });

  // Food Items
  it("Giant Jelly", () => {
    cy.visit(jellyWorld.url);
    cy.get(jellyWorld.selector.btnGiantJellyGrab).click();
  });

  it("Giant Omelette", () => {
    cy.visit(tyranniaPlateau.strings.OmeletteUrl).click();
    cy.get(tyranniaPlateau.selectors.buttonOmelette).click();
  });

  // Wheels
  it("Wheel of Mediocrity", () => {
    cy.visit(tyranniaJungle.urls.wheelMediocrity);
    cy.wait(3000);
    cy.get(tyranniaJungle.selectors.btnSpinWheelMediocrity).click();
    cy.wait(9000);
    cy.get(tyranniaJungle.selectors.divWheelMediocrityCanvas).click();
  });

  // Scratchcards
  it("Haunted Scratchcard", () => {
    cy.visit(hauntedWoods.urls.scratchcard);
    cy.get(hauntedWoods.selectors.btnBuyScratchcard).click();
    cy.wait(2000);
    cy.get(hauntedWoods.selectors.selectScratchcard).select(1);
    cy.get(hauntedWoods.selectors.btnScratch).click();
    for (let i = 1; i <= 6; i++) {
      cy.get(hauntedWoods.selectors[`tdSpot${i}`]).click();
    }
  });

  // Other Timed Activities
  it("Test Your Strength", () => {
    cy.visit(hauntedWoods.urls.testYourStrength);
    cy.wait(5000);
    cy.get(hauntedWoods.selectors.btnTestYourStrength).click();
  });

  it("Tombola", () => {
    cy.visit(mysteryIsland.urls.tombola);
    cy.get(mysteryIsland.selector.inputPlayTomabola).click();
  });

  // Miscellaneous
  it("Money Tree", () => {
    cy.visit(neopiaCentral.urls.moneyTree);
    cy.get(neopiaCentral.selector.moneyTreeFirstDonate).click();
  });
});
