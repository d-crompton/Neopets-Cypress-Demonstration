// PO for the second Tyrannia area, reached from the Jungle
import { createLinkElement } from "../../support/navigation";

class TyranniaPlateau {
  area = "prehistoric";

  selectors = {
    liOmelette: createLinkElement("omelette"),
    buttonOmelette: 'input[value="Grab some Omelette"]',
    txtSabreXName: "center p:nth-child(3) b",
  };

  textValues = {
    sabreXName: "Sabre-X",
  };

  strings = {
    OmeletteUrl: "prehistoric/omelette.phtml",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
