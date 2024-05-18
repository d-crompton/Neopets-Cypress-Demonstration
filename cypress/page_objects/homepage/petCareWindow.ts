// The Window that appears whenever a Pet is pressed on the Homepage
class PetCareWindow {
  selectors = {
    petHungerStatus: "#petCareInfoHunger",
    petStatusExit: "body > div:nth-child(6) .petCare-button-exit", // First exit seen on pop-up
    petCareItemGridItem: ".petCare-itemgrid-item",
    btnPetCareUseItem: "#petCareUseItem",
    // Feeding Pet
    feedButton: ".petCare-button-feed",
    // feedItemButton: ".petCare-itemgrid-item",
    feedIntBackButton: ".petInt-button-back", // Back button that appears on food select
    feedIntExitButtion: ".petInt-button-exit", // Exit button that appears on food select
    // feedPetButton: "#petCareUseItem",
    resultStatusText: "#petCareResult .popup-body__2020 p:nth-of-type(3)",
    resultStatusExitButton: ".petCareResult .button-x__2020",
    resultBackButton: "#petCareResultBack",
    // Grooming Pet
    groomButton: ".petCare-button-groom",
    activeButton: ".pet-star",
  };
}

const petCareWindow = new PetCareWindow();
export { petCareWindow };
