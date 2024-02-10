class FaerieLand {
  selectors = {
    liHealingSprings: `li[onclick="location.href = '/faerieland/springs.phtml'"]`,
    btnHealMyPets: "input[value='Heal my Pets']",
  };
}

export const faerieLand = new FaerieLand();
