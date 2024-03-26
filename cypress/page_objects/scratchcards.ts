// PO shared between Haunted Fairground and Happy Valley scratchcards
class Scratchcards {
  selectors = {
    // Scratching the Card - Top 2 rows (6 cells)
    tdSpot1: "center > table table > tbody tr:first-child > td:nth-of-type(2)",
    tdSpot2: "center > table table > tbody tr:first-child > td:nth-of-type(3)",
    tdSpot3: "center > table table > tbody tr:first-child > td:nth-of-type(4)",
    tdSpot4: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(1)",
    tdSpot5: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(2)",
    tdSpot6: "center > table table > tbody tr:nth-child(2) > td:nth-of-type(3)",
    // Race to Riches (Winter) Scratchcard is structured different to Halloween
    winterTdSpot6:
      "center > table table > tbody tr:nth-child(2) > td:nth-of-type(4)",
  };
}

export const scratchcards = new Scratchcards();
