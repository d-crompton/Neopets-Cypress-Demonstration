// Go to Jelly World and grab Giant Jelly
import { jellyWorld } from "../../page_objects/explore/JellyWorld";

describe("Grab some jelly", () => {
  it("Grab some jelly", () => {
    cy.visit(jellyWorld.strings.giantJellyLink); // Jelly world is not visitable from the explore page
    cy.get(jellyWorld.selector.btnGiantJellyGrab).click();
  });
});
