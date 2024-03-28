// Homepage - https://www.neopets.com/home/
class HomePage {
  selectors = {
    neopassWindowClose: ".np-modal #psPopupExitButton",
    currentPet: ".slick-current",
    divPet: ".hp-carousel-pet", // A pet is there
    addPet: ".hp-carousel-addpet",
    selectPet: ".slick-slide:nth-of-type(X)",
  };
}

const homePage = new HomePage();
export { homePage };
