// Homepage - https://www.neopets.com/home/
class HomePage {
  selectors = {
    currentPet: ".slick-current",
    divPet: ".hp-carousel-pet", // A pet is there
    addPet: ".hp-carousel-addpet",
    selectPet: ".slick-slide:nth-of-type(X)",
  };
}

const homePage = new HomePage();
export { homePage };
