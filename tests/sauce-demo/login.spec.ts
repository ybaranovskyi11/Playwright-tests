import { test, expect } from "@playwright/test";
import {
  LOGIN_DATA,
  SAUCE_DEMO_URL,
} from "../../utils/fixtures/sauce-demo/constants";
import { LoginPage } from "../../utils/fixtures/sauce-demo/pages/loginPage";

let loginPage;

test.beforeEach(async ({ page }) => {
  await page.goto(SAUCE_DEMO_URL);
  loginPage = new LoginPage(page)
});

test.describe("Login operations", async () => {
  test("Login failed - invalid username", async ({ page }) => {
    await loginPage.login(LOGIN_DATA.invalidUserName, LOGIN_DATA.validPassword);
    await expect(page.getByText(LOGIN_DATA.loginErrorMessage)).toBeVisible();
  });

  test("Login failed - invalid password", async ({ page }) => {
    await loginPage.login(LOGIN_DATA.validUserName, LOGIN_DATA.invalidPassword);
    await expect(page.getByText(LOGIN_DATA.loginErrorMessage)).toBeVisible();
  });

  test("Login success - valid username and password", async ({ page }) => {
    await loginPage.login(LOGIN_DATA.validUserName, LOGIN_DATA.validPassword);
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
});
