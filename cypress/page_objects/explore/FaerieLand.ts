import { createLinkElement } from "../../support/navigation";

class FaerieLand {
  area = "faerieland";

  selectors = {
    // Healing Springs
    liHealingSprings: createLinkElement(this.area, "springs"),
    btnHealMyPets: "input[value='Heal my Pets']",
    pAfterHealMyPets: ".theme-bg p:first-of-type", // Message that appears after pressing the button above
    // Wheel of Excitement
    liWheelOfExcitement: createLinkElement(this.area, "wheel"),
    btnWheelSpin: "#wheelButtonSpin",
    canvasWheel: "canvas",
    // Grundo Plushie
    liGrundoPlushie: createLinkElement(this.area, "tdmbgpop"),
    btnTalkToPlushie: `input[value^='Talk']`,
  };

  urls = {
    grundoPlushie: "faerieland/tdmbgpop.phtml",
    wheelOfExcitement: "faerieland/wheel.phtml",
  };
}

export const faerieLand = new FaerieLand();
