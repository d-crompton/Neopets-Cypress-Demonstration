import { createLinkElement } from "../../support/navigation";

class HauntedWoods {
  area = "halloween";

  selectors = {
    liFairground: createLinkElement("index_fair"),
    // Scratch Card - Buying and Selecting
    liScratchcard: createLinkElement("scratch"),
    btnBuyScratchcard: 'form[action="process_scratch.phtml"] input',
    selectScratchcard: 'select[name="card_id"]',
    btnScratch: 'form[action="scratch2.phtml"] input',
    // Test Your Strength
    liTestYourStrength: createLinkElement("strtest/index"),
    btnTestYourStrength: "#process_strtest",
    bOops: `div[style*='color: darkred;'] b:first-of-type`,
    // Wheel of Misfortune
    liWheelOfMisfortune: createLinkElement("wheel"),
    btnSpinTheWheel: "#wheelButtonSpin",
    divWheelMisfortuneCanvas: "#wheelCanvas",
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
