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
    // bApproachOmelette - You approach the massive omelette...
    // Appears when you successfully get the omelette
    // Appears when you have already claimed today
    bApproachOmelette: "center > p:nth-of-type(1) b",
    // bSabreX
    // Does not appear if you successfully get the omelette
    // Appears when you have already claimed today
    bSabreX: "center > p:nth-of-type(2) b",
    // bManageToTakeASlice
    // Appears when you successfully get the omelette
    // Does not appear if you successfully get the omelette
    bManageToTakeASlice: "center > p:nth-of-type(3) b",
  };

  strings = {
    omeletteHasGone: "The Omelette has Gone!!!",
    omeletteUrl: "prehistoric/omelette.phtml",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
