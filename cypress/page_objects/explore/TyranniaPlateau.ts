// PO for the second Tyrannia area, reached from the Jungle
import { createLinkElement } from "../../support/navigation";

class TyranniaPlateau {
  area = "prehistoric";

  selectors = {
    // Giant Omelette
    liOmelette: createLinkElement("omelette"),
    buttonOmelette: 'input[value="Grab some Omelette"]',
    imgOmelette: 'img[src*="omelette"]',
    imgSabreX: 'img[src*="dino_lupe"]',
    bOmeletteGoneText: "center b",
  };

  strings = {
    omeletteHasGone: "The Omelette has Gone!!!",
    omeletteUrl: "prehistoric/omelette.phtml",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
