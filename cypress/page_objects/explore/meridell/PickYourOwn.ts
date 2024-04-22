// PO for the Pick Your Own game - Meridell, Meri Acre Farms
class PickYourOwn {
  selectors = {
    btnPlay: 'input[value*="Play!"]',
    // After game starts
    imgFieldPicture: 'img[src*="berry_farm"]',
    imgArrowUp: 'img[src*="arrow_up"]',
    imgArrowDown: 'img[src*="arrow_down"]',
    imgArrowLeft: 'img[src*="arrow_left"]',
    imgArrowRight: 'img[src*="arrow_right"]',
    bYouFoundA: "center center b",
    tablePunnet: 'table[style*="punnet"]',
    aPunnetItem: 'table[style*="punnet"] a',
    btnCollectBerriesAndLeave: 'input[value*="Collect"]',
  };

  boobyPrizes = {
    "Bit of Barbed Wire": "id=15",
    "Piece of Wool": "id=16",
    "Old Boot": "id=17",
    "Rotten Berry": "id=18",
    "Pile of Dung": "id=19",
    "Half-eaten Berry": "id=20",
  };

  locateAndMoveToStartMap() {
    // Method split into two as cannot pass out mapString from .then()
    cy.get("body").then((body) => {
      // 1. Locate - Generate mapString based on present arrow buttons.
      let mapString = "";
      // Up Arrow
      if (body.find(this.selectors.imgArrowUp).length == 1) {
        mapString += "U";
      }
      // Down Arrow
      if (body.find(this.selectors.imgArrowDown).length == 1) {
        mapString += "D";
      }
      // Left Arrow
      if (body.find(this.selectors.imgArrowLeft).length == 1) {
        mapString += "L";
      }
      // Right Arrow
      if (body.find(this.selectors.imgArrowRight).length == 1) {
        mapString += "R";
      }

      // 2. Move to Start Location using mapString to determine next move
      switch (mapString) {
        // "DR" is the Top-Left cell and is the starting cell
        case "DLR": // Top-Mid
          cy.get(this.selectors.imgArrowLeft).click();
          break;
        case "DL": // Top-Right
          cy.get(this.selectors.imgArrowLeft).click();
          cy.get(this.selectors.imgArrowLeft).click();
          break;
        case "UDR": // Mid-Left
          cy.get(this.selectors.imgArrowUp).click();
          break;
        case "UDLR": // Centre
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowLeft).click();
          break;
        case "UDL": // Middle-Right
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowLeft).click();
          cy.get(this.selectors.imgArrowLeft).click();
          break;
        case "UR": // Bottom-Left
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowUp).click();
          break;
        case "ULR": // Bottom-Mid
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowLeft).click();
          break;
        case "UL": // Bottom-Right
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowUp).click();
          cy.get(this.selectors.imgArrowLeft).click();
          cy.get(this.selectors.imgArrowLeft).click();
          break;
      }
    });
  }

  playPickYourOwnGame(
    berriesCollected: number = 0
    // berriesInPunnet: number = 0 // May become unneccessary as cannot adjust inside the .then()
  ) {
    // Once 6 berries are retrieved, game ends the map disappears and so do the punnet links (replaced with images)
    // Try to click the field picture, if it's not there (causing an error) exit the game
    try {
      cy.get(this.selectors.imgFieldPicture).click();
    } catch {
      return;
    }

    // Throwing away collected booby prizes
    cy.get(this.selectors.bYouFoundA)
      .invoke("text")
      .then((text) => {
        let foundItem = text.replace("You found a ", "").trim();
        if (this.boobyPrizes.hasOwnProperty(foundItem)) {
          // Discard booby prize from punnet
          cy.get(`a[href*='${this.boobyPrizes[foundItem]}']`).click();
          console.log("Discarded junk");
        }
      });

    // End game if all berries are collected
    berriesCollected += 1;
    if (berriesCollected == 9) return;

    // Start cycle again
    this.moveToNextMap(berriesCollected);
    this.playPickYourOwnGame(berriesCollected);
  }

  /* 
  // Determine next move based on how many berries you've collected (reflects what map you're on, starting top-left)
  > > V
  V < <
  > > X
  */

  moveToNextMap(berriesCollected: number) {
    switch (berriesCollected) {
      case 1: // Top-Left
      case 2: // Top-Mid
      case 7: // Bottom-Left
      case 8: // Bottom-Mid
        cy.get(this.selectors.imgArrowRight).click();
        break;
      case 3: // Top-Right
      case 6: // Mid-Left
        cy.get(this.selectors.imgArrowDown).click();
        break;
      case 4: // Mid-Right
      case 5: // Centre
        cy.get(this.selectors.imgArrowLeft).click();
        break;
      case 9: // Bottom-Right (last cell)
        break;
    }
  }
}

export const pickYourOwn = new PickYourOwn();
