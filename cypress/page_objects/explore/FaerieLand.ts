import { createLinkElement } from "../../support/navigation";

class FaerieLand {
  area = "faerieland";

  selectors = {
    // Healing Springs
    liHealingSprings: createLinkElement("springs"),
    btnHealMyPets: "input[value='Heal my Pets']",
    pAfterHealMyPets: ".theme-bg p:first-of-type", // Message that appears after pressing the button above
    // Wheel of Excitement
    liWheelOfExcitement: createLinkElement("wheel"),
    btnWheelSpin: "#wheelButtonSpin",
    canvasWheel: "canvas",
    // Grundo Plushie
    liGrundoPlushie: createLinkElement("tdmbgpop"),
    btnTalkToPlushie: `input[value^='Talk']`,
    pGrundoText: "#container__2020 p",
  };

  strings = {
    alreadyVisitedGrundo: "What? You have already visited the plushie today,",
  };

  urls = {
    grundoPlushie: "faerieland/tdmbgpop.phtml",
    wheelOfExcitement: "faerieland/wheel.phtml",
  };
}

export const faerieLand = new FaerieLand();
