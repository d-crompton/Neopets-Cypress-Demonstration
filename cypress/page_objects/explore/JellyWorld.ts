class JellyWorld {
  selector = {
    btnGiantJellyGrab: `form[action="jelly.phtml"] input[type="submit"]`,
  };

  strings = {
    giantJellyLink: "https://www.neopets.com/jelly/jelly.phtml",
  };
}

export const jellyWorld = new JellyWorld();
