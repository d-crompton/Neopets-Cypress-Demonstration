// Terror Mountain - Happy Valley
class TerrorMountain {
  createWinterLinkElem = (location: string) => {
    return `li[onclick="location.href = '/winter/${location}.phtml'"]`;
  };

  urls = {
    scratchcardKiosk: "winter/kiosk.phtml",
    scratchcardAlreadyPurchased:
      "https://www.neopets.com/winter/process_kiosk.phtml",
  };

  selectors = {
    liScratchcardKiosk: this.createWinterLinkElem("kiosk"),
    // Scratchcard Kiosk
    btnBuyScratchcard: `form[method="post"] input[type="submit"]`,
    selectScratchcard: 'select[name="card_id"]',
    // optionScratchcard: "option",
    btnScratch: 'input[value="Scratch!"]',
  };
}

export const terrorMountain = new TerrorMountain();
