// PO for the Tyrannia Jungle, the first Tyrannia map from the Explore page
import { createLinkElement } from "../../support/navigation";

class TyranniaJungle {
  area = "prehistoric";

  selectors = {
    liPlateauLink: createLinkElement("plateau"),
    // Wheel of Mediocrity
    liWheelMediocrity: createLinkElement("mediocrity"),
    btnSpinWheelMediocrity: "#wheelButtonSpin",
    divWheelMediocrityCanvas: "#wheelCanvas canvas", // 438 x 487
    pWheelMediocrityText: ".container p",
  };

  strings = {
    wheelMediocrityHey: `Hey, it's the Wheel of Mediocrity.`,
    wheelMediocrityCantSpinNowText: `you can't spin right now`,
  };

  urls = {
    wheelMediocrity: "prehistoric/mediocrity.phtml",
  };
}

export const tyranniaJungle = new TyranniaJungle();
