// PO for the Tyrannia Jungle, the first Tyrannia map from the Explore page

class TyranniaJungle {
  createTyranniaLinkElem = (location: string) => {
    return `li[onclick="location.href = '/prehistoric/${location}.phtml'"]`;
  };

  selectors = {
    liPlateauLink: `${this.createTyranniaLinkElem("plateau")} h4`,
    // Wheel of Mediocrity
    liWheelMediocrity: this.createTyranniaLinkElem("mediocrity"),
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
