// PO for the second Tyrannia area, reached from the Jungle
import { createLinkElement } from "../../support/navigation";

class TyranniaPlateau {
  area = "prehistoric";

  selectors = {
    // Giant Omelette
    liOmelette: createLinkElement("omelette"),
    buttonOmelette: 'input[value="Grab some Omelette"]',
    txtSabreXName: "center p:nth-child(3) b",
    imgSabreX: 'img[src*="dino_lupe"]',
    bOmeletteGoneText: "center b", // Appears under SabreX image, confirm what appears on success or already claimed today
  };

  textValues = {
    sabreXName: "Sabre-X",
  };

  strings = {
    omeletteHasGone: "The Omelette has Gone!!!",
    OmeletteUrl: "prehistoric/omelette.phtml",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
