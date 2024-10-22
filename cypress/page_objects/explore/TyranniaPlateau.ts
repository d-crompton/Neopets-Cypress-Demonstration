// PO for the second Tyrannia area, reached from the Jungle
import { createLinkElement } from "../../support/navigation";

class TyranniaPlateau {
  area = "prehistoric";

  selectors = {
    // Giant Omelette
    liOmelette: createLinkElement("omelette"),
    buttonOmelette: 'button[onclick*="Omelette"]',
    imgOmelette: 'img[src*="omelette.gif"]',
    pLowerText: "center p:nth-of-type(2)",
  };

  strings = {
    omeletteHasGone: "The Omelette has Gone!!!",
    omeletteUrl: "prehistoric/omelette.phtml",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
