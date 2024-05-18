// Once script works, remove and add to Quest Functions
// WORK IN PROGRESS
describe("Play Game", () => {
  it("Play Game", () => {
    // cy.get(navigationBar.selectors.aGamesLink).click();

    // KASS BASHER
    // cy.visit(
    //   "https://www.neopets.com/games/game.phtml?game_id=381&size=regular&quality=high&play=true"
    // );
    // cy.pause();
    // cy.get("#game_cont iframe").then((iframe) => {
    //   cy.wrap(iframe.contents().find("body")).then((body) => {
    //     cy.wrap(body.find("#game_container")).click(250, 240);
    //     cy.wait(2000);
    //     cy.wrap(body.find("#game_container")).click();
    //     cy.wait(5000);
    //     cy.wrap(body.find("#game_container")).click(400, 240);
    //   });
    // });

    // TURMAC ROLL
    cy.visit(
      "https://www.neopets.com/games/game.phtml?game_id=366&size=regular&quality=high&play=true"
    );
    cy.pause();
    cy.get("#game_cont iframe").then((iframe) => {
      cy.wrap(iframe.contents().find("body")).then((body) => {
        cy.wrap(body.find("ruffle-embed")).trigger("click", 400, 210, {
          force: true,
        });
        // .click(400, 210, {          force: true,        });
        cy.pause();
        cy.wait(2000);
        cy.wrap(body.find("#game_container")).click(300, 400);
        cy.wrap(body.find("#game_container")).type("{rightarrow}");
        cy.pause();
      });
    });
  });
});
