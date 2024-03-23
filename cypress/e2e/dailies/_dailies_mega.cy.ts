// A single test file containing all the different dailies (and timed activties)
// Rather than using "Explore", this test will use direct links
import { loginUsingSession } from "../../support/login";
import { trudysSurprise } from "../../page_objects/trudysSurprise";
import { hauntedWoods } from "../../page_objects/explore/HauntedWoods";
import { jellyWorld } from "../../page_objects/explore/JellyWorld";
import { tyranniaPlateau } from "../../page_objects/explore/TyranniaPlateau";
import { tyranniaJungle } from "../../page_objects/explore/TyranniaJungle";
import { neopiaCentral } from "../../page_objects/explore/NeopiaCentral";
import { mysteryIsland } from "../../page_objects/explore/MysteryIsland";
import { faerieLand } from "../../page_objects/explore/FaerieLand";
import { scratchcards } from "../../page_objects/scratchcards";
import { lostDesert } from "../../page_objects/explore/LostDesert";
import { brightvale } from "../../page_objects/explore/Brightvale";

describe("Dailies", () => {
  beforeEach(() => {
    loginUsingSession();
  });

  // Trudy's Surprise
  it("Trudy's Surprise", () => {
    cy.visit(trudysSurprise.url);
    cy.wait(4000); // Wait for slots iframe to load
    cy.get(trudysSurprise.selectors.iframe).then((iframe) => {
      cy.wrap(iframe.contents().find("body")).then((body) => {
        cy.wrap(body.find(trudysSurprise.selectors.canvas)).click(450, 600);
      });
    });
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

  it("Wheel of Excitement", () => {
    cy.visit(faerieLand.urls.wheelOfExcitement);
    cy.wait(3000);
    cy.get(faerieLand.selectors.btnWheelSpin).click();
    cy.wait(8000);
    cy.get(faerieLand.selectors.canvasWheel).click();
  });

  it("Wheel of Knowledge", () => {
    cy.visit(brightvale.url.wheelOfKnowledge);
    cy.wait(3000);
    cy.get(brightvale.selectors.canvasWheel).click();
    cy.wait(8000);
    cy.get(brightvale.selectors.canvasWheel).click();
  });

  // Scratchcards - Can only include 1 type
  it("Haunted Scratchcard", () => {
    cy.visit(hauntedWoods.urls.scratchcard);
    cy.get(hauntedWoods.selectors.btnBuyScratchcard).click();
    cy.wait(2000);
    cy.get(hauntedWoods.selectors.selectScratchcard).select(1);
    cy.get(hauntedWoods.selectors.btnScratch).click();
    for (let i = 1; i <= 6; i++) {
      cy.get(scratchcards.selectors[`tdSpot${i}`]).click();
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

  it("Fruit Machine", () => {
    cy.visit(lostDesert.urls.fruitMachine);
    cy.get(lostDesert.selectors.btnSpinFruitMachine).click();
  });

  it("Coltzan's Shrine", () => {
    cy.visit(lostDesert.urls.coltzansShrine);
    cy.get(lostDesert.selectors.btnApproachShrine).click();
  });

  // Miscellaneous - Not necessarily timed but can quickly redeem
  it("Money Tree", () => {
    cy.visit(neopiaCentral.urls.moneyTree);
    cy.get(neopiaCentral.selector.moneyTreeFirstDonate).click();
  });
});
