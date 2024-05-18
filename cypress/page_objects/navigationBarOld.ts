// Classic style navigation bar (not the one on the homepage)
// Appears on https://www.neopets.com/neomessages.phtml
class OldNavBar {
  selectors = {
    aHomePage: '#header a[href^="/home/index"]',
    imgExploreLink: 'img[src*="explore"]',
  };
}

export const oldNavBar = new OldNavBar();
