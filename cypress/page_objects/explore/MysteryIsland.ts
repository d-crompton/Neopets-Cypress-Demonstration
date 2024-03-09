class MysteryIsland {
  selector = {
    liTombola: ".quickLinks__2020 > li:nth-of-type(16)",
    inputPlayTomabola: 'input[value="Play Tombola!"]',
  };

  urls = {
    tombola: "island/tombola.phtml",
  };
}

export const mysteryIsland = new MysteryIsland();
