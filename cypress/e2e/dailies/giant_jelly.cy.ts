// Giant Jelly - Jelly World
import { jellyWorld } from "../../page_objects/explore/JellyWorld";

describe("Grab some jelly", () => {
  it("Grab some jelly", () => {
    cy.visit(jellyWorld.url); // Jelly world is not visitable via explore
    cy.get(jellyWorld.selector.btnGiantJellyGrab).click();
  });
});
