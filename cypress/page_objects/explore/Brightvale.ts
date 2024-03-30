import { createLinkElement } from "../../support/navigation";

class Brightvale {
  area = "medieval";

  selectors = {
    // Wheel of Knowledge
    liWheelOfKnowledge: createLinkElement("knowledge"),
    btnSpinWheel: "#wheelButtonSpin",
    canvasWheel: "#wheelCanvas",
  };

  url = {
    wheelOfKnowledge: "medieval/knowledge.phtml",
  };
}

export const brightvale = new Brightvale();
