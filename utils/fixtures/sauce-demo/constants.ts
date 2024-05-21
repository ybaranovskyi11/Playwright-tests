//Login Details
export const LOGIN_DATA = Object.freeze({
  validUserName: "standard_user",
  invalidUserName: "Garry109",
  validPassword: "secret_sauce",
  invalidPassword: "my_password01",
  loginErrorMessage:
    "Epic sadface: Username and password do not match any user in this service",
});

export const SAUCE_DEMO_URL = "https://www.saucedemo.com/";
export const NEOWIN_URL = "https://www.neowin.net/";

export const NEOWIN_ADS = [
  "https://adservice.google.com",
  "https://adservice.google.co.nz",
  "https://partner.googleadservices.com",
  "https://googleads.g.doubleclick.net",
  "https://www.googletagservices.com",
  "https://stats.g.doubleclick.net",
  "https://c.amazon-adsystem.com",
  "https://pagead2.googlesyndication.com",
  "https://idsync,rlcdn.com",
  "https://googleads.g.doubleclick.net",
  "https://jogger.zdbb.net",
  "https://zdbb.net",
  "https://id.adnxs.com",
  "https://securepubads.g.doubleclick.net",
  "https://dt.adsafeprotacted.com",
  "https://as-sec.casalemedia.com",
];

//Login Locators
export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';
