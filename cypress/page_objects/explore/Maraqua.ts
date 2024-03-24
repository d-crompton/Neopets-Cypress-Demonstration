import { createLinkElement } from "../../support/navigation";

class Maraqua {
  area = "water";

  selectors = {
    // Ruins
    liRuins: createLinkElement(this.area, "index_ruins"),
    // Underwater Fishing
    liFishingVortex: createLinkElement(this.area, "fishing"),
    btnReelLine: 'input[value^="Reel"]',
  };

  url = {
    fishingVortex: "water/fishing.phtml",
  };
}

export const maraqua = new Maraqua();
