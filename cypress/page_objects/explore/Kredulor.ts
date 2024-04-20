class Kredulor {
  selectors = {
    // Giant Meteor
    btnMeteorTakeChance: `input[value='Take a chance']`,
    pMeteor: ".content div:nth-child(2) p:first-of-type", // It's gone!
    selectMeteor: 'select[name="pickstep"]', // Choose action
    btnMeteorSubmit: 'input[value="Submit"]',
  };

  strings = {
    itsGone: `It's gone!`,
  };
  urls = {
    meteor: "moon/meteor.phtml",
  };
}

export const kredulor = new Kredulor();
