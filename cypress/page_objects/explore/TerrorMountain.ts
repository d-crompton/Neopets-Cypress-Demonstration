// Terror Mountain - Happy Valley
import { navigateToLink } from "../../support/navigation";

class TerrorMountain {
  urls = {
    scratchcardAlreadyPurchased:
      "https://www.neopets.com/winter/process_kiosk.phtml",
  };

  area = "winter";

  selectors = {
    liScratchcardKiosk: navigateToLink(this.area, "kiosk"),
    // Scratchcard Kiosk
    btnBuyScratchcard: `form[method="post"] input[type="submit"]`,
    selectScratchcard: 'select[name="card_id"]',
    btnScratch: 'input[value="Scratch!"]',
  };
}

export const terrorMountain = new TerrorMountain();
