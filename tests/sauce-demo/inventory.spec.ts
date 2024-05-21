import { expect, test } from './../../utils/fixtures/sauce-demo/test-utils'
import {
  LOGIN_DATA,
  SAUCE_DEMO_URL,
} from "../../utils/fixtures/sauce-demo/constants";

test.beforeEach(async ({ loginPage, page }) => {
  await page.goto(SAUCE_DEMO_URL);
  await loginPage.login(LOGIN_DATA.validUserName, LOGIN_DATA.validPassword);
  await expect(page.getByText("Swag Labs")).toBeVisible();
});

test.describe("Inventory operations", async () => {
  test("Inventory images - load check", async ({ inventoryComponent }) => {
    await inventoryComponent.checkInventoryImagesLoaded();
  });
});
