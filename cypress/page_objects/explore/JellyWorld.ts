class JellyWorld {
  url = "jelly/jelly.phtml";
  selector = {
    btnGiantJellyGrab: `form[action="jelly.phtml"] input[type="submit"]`,
  };
}

export const jellyWorld = new JellyWorld();
