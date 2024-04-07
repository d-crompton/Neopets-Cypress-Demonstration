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

  boobyC;
}

/*
When clicking the item you want to discard, it will ask a prompt with OK/Cancel
Barbed Wire - id=15
Rotten Berry - id=18
Pile of Dung - id=19
Half berry - id=20
*/

export const pickYourOwn = new PickYourOwn();
