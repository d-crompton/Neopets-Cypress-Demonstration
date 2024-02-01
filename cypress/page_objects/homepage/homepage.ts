// Homepage - https://www.neopets.com/home/
class HomePage {
  selectors = {
    currentPet: ".slick-current",
    divPet: ".hp-carousel-pet", // A pet is there
    addPet: ".hp-carousel-addpet",
  };
}

const homePage = new HomePage();
export { homePage };
