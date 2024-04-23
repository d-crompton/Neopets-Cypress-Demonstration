// PO for the Faerie Caverns
class FaerieCaverns {
  selectors = {
    btnCavernsEnter: 'input[value="Enter"]',
    // Cavern Split - Left or Right
    imgCavePaths: 'img[src*="cave_paths"]',
    btnCavernsLeft: 'input[value="Left"]',
    btnCavernsRight: 'input[value="Right"]',
    // Dead End
    imgCaveDeadEnd: 'img[src*="cave_dead_end"]',
    btnSeeWhatYouFound: "GET SELECTOR VALUE",
    btnReturn: 'input[value*="Return"]',
  };

  exploreCaverns() {
    // Images
    // CAVE PATHS - Select randomly left or right
    // CAVE DEAD END - Return to Faerieland (return function)
    cy.get("body").then((body) => {
      // CAVE PATHS
      if (body.find(this.selectors.imgCavePaths).length === 1) {
        // Randomly select left or right
        this.exploreCaverns();
      }
      // CAVE DEAD END
      if (body.find(this.selectors.imgCaveDeadEnd).length === 1) {
        return;
      }
    });
  }
}

export const faerieCaverns = new FaerieCaverns();
