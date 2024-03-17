import { createLinkElement } from "../../support/navigation";

class HauntedWoods {
  area = "halloween";

  selectors = {
    liFairground: createLinkElement(this.area, "index_fair"),
    // Scratch Card - Buying and Selecting
    liScratchcard: createLinkElement(this.area, "scratch"),
    btnBuyScratchcard: 'form[action="process_scratch.phtml"] input',
    selectScratchcard: 'select[name="card_id"]',
    btnScratch: 'form[action="scratch2.phtml"] input',
    // Test Your Strength
    // liTestYourStrength: `li[onclick="location.href = '/halloween/strtest/index.phtml'"]`,
    liTestYourStrength: createLinkElement(this.area, "strtest/index"),
    btnTestYourStrength: "#process_strtest",
    bOops: `div[style*='color: darkred;'] b:first-of-type`,
  };

  strings = {
    scratchcardGiveEverybodyElse:
      "Hey, give everybody else a chance to buy a scratchcard!!",
    scratchcardGiveEverybodyElseLink:
      "https://www.neopets.com/halloween/process_scratch.phtml",
    testStrengthOops: "Oops!",
  };

  urls = {
    scratchcard: "halloween/scratch.phtml",
    testYourStrength: "halloween/strtest/index.phtml",
  };
}

export const hauntedWoods = new HauntedWoods();
