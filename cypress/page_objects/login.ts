class LoginPage {
  url = "login/";
  selectors = {
    inputUsername: "#loginUsername",
    inputPassword: "#loginPassword",
    btnLogIn: "#loginButton",
    // New home page
    btnPromoClose: "#btn-promo-continue",
    btnMobileMenu: "#btn-open-mobile-menu",
    txtPlayNeopets: '.mobile-menu a[href="/home/"]',
  };
}

export const loginPage = new LoginPage();
