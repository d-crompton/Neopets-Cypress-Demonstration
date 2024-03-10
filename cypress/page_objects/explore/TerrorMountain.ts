// Terror Mountain - Happy Valley
class TerrorMountain {
  urls = {
    scratchcardKiosk: "winter/kiosk.phtml",
    scratchcardAlreadyPurchased: "winter/process_kiosk.phtml",
  };

  selectors = {
    // Scratchcard Kiosk
    btnBuyScratchcard: `form[method="post"] input[type="submit"]`,
    selectScratchcard: 'select[name="card_id"]',
    optionScratchcard: "option",
  };
}

export const terrorMountain = new TerrorMountain();
