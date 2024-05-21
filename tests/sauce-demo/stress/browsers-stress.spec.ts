import {
  expect,
  test as baseTest,
} from "../../../utils/fixtures/sauce-demo/test-utils";
import {
  LOGIN_DATA,
  SAUCE_DEMO_URL,
} from "../../../utils/fixtures/sauce-demo/constants";

for (let i = 0; i < 100; ++i) {
  baseTest(
    `Browser stress test cycle ${i}`,
    async ({
      page,
      playwright,
      browserName,
      loginPage,
      inventoryComponent,
    }) => {
      const browser = await playwright[browserName].launch();
      try {
        await page.goto(SAUCE_DEMO_URL);
        await loginPage.login(
          LOGIN_DATA.validUserName,
          LOGIN_DATA.validPassword
        );
        await expect(page.getByText("Swag Labs")).toBeVisible();

        await inventoryComponent.checkInventoryImagesLoaded();
      } finally {
        await browser.close();
      }
    }
  );
}
