// PO for the Faerie Caverns
class FaerieCaverns {
  selectors = {
    btnCavernsEnter: 'input[value="Enter"]',
    // Cavern Split - Left or Right
    imgCavePaths: 'img[src*="cave_paths"]',
    imgCave2Paths: 'img[src*="cave_2paths"]',
    btnCavernsLeft: 'input[value="Left"]',
    btnCavernsRight: 'input[value="Right"]',
    // Dead End
    imgCaveDeadEnd: 'img[src*="cave_dead_end"]',
    // Treasure
    imgTreasure: 'img[src*="success"]',
    btnSeeWhatYouFound: `input[value="Click to see what you've found"]`,
    btnReturn: 'input[value*="Return"]',
  };

  exploreCaverns(): void {
    cy.get("body").then((body) => {
      // Left or Right
      if (
        body.find(this.selectors.imgCavePaths).length === 1 ||
        body.find(this.selectors.imgCave2Paths).length === 1
      ) {
        if (Math.random() >= 0.5) {
          cy.log("Going Left");
          cy.get(this.selectors.btnCavernsLeft).click();
        } else {
          cy.log("Going right");
          cy.get(this.selectors.btnCavernsRight).click();
        }
        this.exploreCaverns();
      }
      // Dead End
      if (body.find(this.selectors.imgCaveDeadEnd).length === 1) {
        cy.log("Dead end");
        return;
      }
      // Treasure
      if (body.find(this.selectors.imgTreasure).length === 1) {
        cy.log("Treasure!");
        cy.get(this.selectors.btnSeeWhatYouFound).click();
        return;
      }
    });
  }
}

export const faerieCaverns = new FaerieCaverns();
