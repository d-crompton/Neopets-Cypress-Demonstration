class FaerieLand {
  selectors = {
    liHealingSprings: `li[onclick="location.href = '/faerieland/springs.phtml'"]`,
    btnHealMyPets: "input[value='Heal my Pets']",
    pAfterHealMyPets: ".theme-bg p:first-of-type", // Message that appears after pressing the button above
  };
}

export const faerieLand = new FaerieLand();
