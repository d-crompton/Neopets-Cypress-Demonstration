// PO for the Pick Your Own game - Meridell, Meri Acre Farms
class PickYourOwn {
  selectors = {
    btnPlay: 'input[value*="Play!"]',
    // After game starts
    imgFieldPicture: 'img[src*="berry"]',
    imgArrowUp: 'img[src*="arrow_up"]',
    imgArrowDown: 'img[src*="arrow_down"]',
    imgArrowLeft: 'img[src*="arrow_left"]',
    imgArrowRight: 'img[src*="arrow_right"]',
    bYouFoundA: "center center b",
    tablePunnet: 'table[style*="punnet"]',
    btnCollectBerriesAndLeave: 'input[value*="Collect"]',
  };

  boobyPrizes = {
    "Bit of Barbed Wire": "id=15",
    // Old Boot - id=17
    // Rotten Berry - id=18
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
        console.log("Up arrow found " + mapString);
      }
      // Down Arrow
      if (body.find(this.selectors.imgArrowDown).length == 1) {
        mapString += "D";
        console.log("Down arrow found " + mapString);
      }
      // Left Arrow
      if (body.find(this.selectors.imgArrowLeft).length == 1) {
        mapString += "L";
        console.log("Left arrow found " + mapString);
      }
      // Right Arrow
      if (body.find(this.selectors.imgArrowRight).length == 1) {
        mapString += "R";
        console.log("Right arrow found " + mapString);
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

  /*
  // Click map/Collect berry
  // If there's 6 berries in the punnet, end the game
  // Check that its not a booby prize
  // If so, chuck it (use its id for img in punnet?)

  // Move to next map (using next step obj)
  When clicking the item you want to discard, it will ask a prompt with OK/Cancel
  */

  playPickYourOwnGame(
    mapsVisited: number = 0, // See if this arg is necessary and remove is not
    berriesCollected: number = 0,
    berriesInPunnet: number = 0
  ) {
    cy.log(
      `Maps Visited: ${mapsVisited}, Berries Collected: ${berriesCollected}, Berries In Punnet ${berriesInPunnet}`
    );
    // Collect Berry
    cy.get(this.selectors.imgFieldPicture).click();
    berriesCollected += 1;
    berriesInPunnet += 1;
    if (berriesInPunnet < 6) {
      // Check that its not a booby prize
      /*
      use obj.hasOwnProperty('itemName') - https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
      to check if it is in the booby prize object. If so use the associated ID to find the img in the punnet
      */
      cy.get(this.selectors.bYouFoundA)
        .invoke("text")
        .then((text) => {
          let foundItem = text.replace("You found a ", "").trim(); // Should remove the text at the front, then trim the formatting at the end
          // FOR TESTING
          console.log("+++" + foundItem + "+++");
          console.log(this.boobyPrizes.hasOwnProperty(foundItem));
          console.log(`a[href*='${this.boobyPrizes[foundItem]}']`);
          // =====
          cy.pause();
          if (this.boobyPrizes.hasOwnProperty(foundItem)) {
            console.log(`a[href*='${this.boobyPrizes[foundItem]}']`);
            cy.get(`a[href*='${this.boobyPrizes[foundItem]}']`).click();
          }
        });
      // Remove booby prize, move onto next map
      // Remove one from berries in Punnet (if its taken out)
      this.moveToNextMap(berriesCollected);
      mapsVisited += 1;
      cy.pause();
      // Start cycle again
      this.playPickYourOwnGame(mapsVisited, berriesCollected, berriesInPunnet);
    } else {
      // When you have 6 game ends
      cy.get(this.selectors.btnCollectBerriesAndLeave).click();
      // Collect Berries and Leave Farm
    }

    //ALTERNATIVE GAME END - THE MAP IMAGE DOES NOT APPEAR BUT THE LEAVE BUTTON DOES
  }

  /* 
  // Determine next move based on how many berries you've collected
  // This will determine what map you are on (i.e., top-left is the 1st, bottom-right is the 9th)
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

  // End of Class
}

export const pickYourOwn = new PickYourOwn();
