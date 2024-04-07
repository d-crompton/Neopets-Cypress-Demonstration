import { createLinkElement } from "../../../support/navigation";

class Meridell {
  area = "medieval";

  selectors = {
    // Meri Acres Farm
    liMeriAcresFarm: createLinkElement("index_farm"),
    liPickYourOwn: createLinkElement("pickyourown_index"),
  };
}

export const meridell = new Meridell();
