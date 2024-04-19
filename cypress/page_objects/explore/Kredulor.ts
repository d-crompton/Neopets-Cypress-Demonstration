class Kredulor {
  selectors = {
    btnMeteor: `input[value='Take a chance']`,
    pMeteor: ".content div:nth-child(2) p:first-of-type", // It's gone!
  };

  strings = {
    itsGone: `It's gone!`,
  };
  urls = {
    meteor: "moon/meteor.phtml",
  };
}

export const kredulor = new Kredulor();
