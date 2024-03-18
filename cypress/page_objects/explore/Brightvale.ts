import { createLinkElement } from "../../support/navigation";

class Brightvale {
  area = "medieval";

  selectors = {
    // Wheel of Knowledge
    liWheelOfKnowledge: createLinkElement(this.area, "knowledge"),
    btnSpinWheel: "#wheelButtonSpin",
    canvasWheel: "#wheelCanvas",
  };
}

export const brightvale = new Brightvale();
