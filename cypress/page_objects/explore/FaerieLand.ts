import { createLinkElement } from "../../support/navigation";

class FaerieLand {
  area = "faerieland";

  selectors = {
    // Healing Springs
    liHealingSprings: createLinkElement(this.area, "springs"),
    btnHealMyPets: "input[value='Heal my Pets']",
    pAfterHealMyPets: ".theme-bg p:first-of-type", // Message that appears after pressing the button above
  };
}

export const faerieLand = new FaerieLand();
