// PO for the second Tyrannia area, reached from the Jungle

class TyranniaPlateau {
  selectors = {
    liOmelette:
      "li[onclick=\"location.href = '/prehistoric/omelette.phtml?rand=11996'\"] h4",
    // Inside Omelette pages
    buttonOmelette: 'input[value="Grab some Omelette"]',
    txtSabreXName: "center p:nth-child(3) b",
  };

  textValues = {
    sabreXName: "Sabre-X",
  };
}

export const tyranniaPlateau = new TyranniaPlateau();
