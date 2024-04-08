// PO for the Pick Your Own game - Meridell, Meri Acre Farms
class PickYourOwn {
  selectors = {
    btnPlay: 'input[value*="Play!"]',
    // After game starts
    // Start in Middle Left
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
    "Pile of Dung": "id=19",
    "Half-eaten Berry": "id=20",
  };

  /*
  Recursive Function
  Arguments:
  > Number of Maps visited
  > Number of berries collected
  > Number of berries currently in punnet
  
  // Click map/Collect berry
  // If there's 6 berries in the punnet, end the game
  // Check that its not a booby prize
  // If so, chuck it (use its id for img in punnet?)

  // Move to next map (using next step obj)
  // Figure out how many arrows are present. 

  */

  pickYourOwnGame(
    mapsVisited: number,
    berriesCollected: number,
    berriesInPunnet: number
  ) {
    // Collect Berry
    cy.get(this.selectors.imgFieldPicture).click();
    berriesCollected += 1;
    berriesInPunnet += 1;
    // Check that its not a booby prize - Whilst you have less than 6 berries
    if (berriesInPunnet < 6) {
      // Remove booby prize
    } else {
      // When you have 6 and game ends
    }
  }
}

/*
When clicking the item you want to discard, it will ask a prompt with OK/Cancel
Barbed Wire - id=15
Rotten Berry - id=18
Pile of Dung - id=19
Half-eaten Berry - id=20
*/

/* 
  Started in:
  > Middle Left
  > Center

  // Maybe to work out where you are, use a string ("UDLR = Up, Down, Left, Right") to highlight available arrows
*/

export const pickYourOwn = new PickYourOwn();
