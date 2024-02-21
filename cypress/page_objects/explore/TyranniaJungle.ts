// PO for the Tyrannia Jungle, the first Tyrannia map from the Explore page

class TyranniaJungle {
  createTyranniaLink = (location: string) => {
    return `li[onclick="location.href = '/prehistoric/${location}.phtml'"]`;
  };

  selectors = {
    liPlateauLink: `${this.createTyranniaLink("plateau")} h4`,
    // Wheel of Mediocrity
    liWheelMediocrity: this.createTyranniaLink("mediocrity"),
    btnSpinWheelMediocrity: "#wheelButtonSpin",
    divWheelMediocrityCanvas: "#wheelCanvas canvas", // 438 x 487
    pWheelMediocrityCantSpinNow: ".container p",
  };

  string = {
    wheelMediocrityCantSpinNowText: `you can't spin right now`,
  };
}

export const tyranniaJungle = new TyranniaJungle();
