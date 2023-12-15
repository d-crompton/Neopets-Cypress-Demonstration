// The Window that appears whenever a Pet is pressed on the Homepage
class PetCareWindow {
  selectors = {
    petHungerStatus: "#petCareInfoHunger",
    feedButton: ".petCare-button-feed",
    feedItemButton: ".petCare-itemgrid-item",
    feedPetButton: "#petCareUseItem",
    resultStatusText: "#petCareResult .popup-body__2020 p:nth-of-type(3)",
    resultBackButton: "#petCareResultBack",
    resultExitButton: ".petCareResult .petCare-button-exit",
  };
}

const petCareWindow = new PetCareWindow();
export { petCareWindow };
