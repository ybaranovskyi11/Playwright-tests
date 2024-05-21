import { expect, test } from "@playwright/test";
import {
  LOGIN_DATA,
  SAUCE_DEMO_URL,
} from "../../../utils/fixtures/sauce-demo/constants";
import { LoginPage } from "../../../utils/fixtures/sauce-demo/pages/loginPage";

let loginPage;

test("should block images on sauce-demo.com", async ({ page }) => {
  loginPage = new LoginPage(page);

  await page.route("**/*.{png,jpg,jpeg,svg}", (route) => {
    if (route.request().resourceType() === "image") {
      route.abort();
    } else {
      route.continue();
    }
  });

  await page.goto(SAUCE_DEMO_URL);
  await loginPage.login(LOGIN_DATA.validUserName, LOGIN_DATA.validPassword);
  await expect(page.getByText("Swag Labs")).toBeVisible();

  await page.on('pageerror', pageError => {
    console.log(`Page errors: "${pageError}"`);
  })

  await page.on('requestfailed', requestFailed => {
    console.log(`Request fails: "${requestFailed.url()}"`);
  })
});
