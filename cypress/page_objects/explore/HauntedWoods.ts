class HauntedWoods {
  selectors = {
    liFairground: `li[onclick="location.href = '/halloween/index_fair.phtml'"]`,
    //Scratch Card - Buying and Selecting
    liScratchcard: `li[onclick="location.href = '/halloween/scratch.phtml'"]`,
    btnBuyScratchcard: 'form[action="process_scratch.phtml"] input',
    selectScratchcard: 'select[name="card_id"]',
    btnScratch: 'form[action="scratch2.phtml"] input',
    //Scratch Card - Scratching the Card
    tdSpot1: "center > table table > tbody tr:first-child > td:nth-of-type(2)",
    tdSpot2: "center > table table > tbody tr:first-child > td:nth-of-type(3)",
    tdSpot3: "center > table table > tbody tr:first-child > td:nth-of-type(4)",
    tdSpot4: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(1)",
    tdSpot5: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(2)",
    tdSpot6: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(3)",
  };

  strings = {
    scratchcardGiveEverybodyElse:
      "Hey, give everybody else a chance to buy a scratchcard!!",
  };
}

export const hauntedWoods = new HauntedWoods();
