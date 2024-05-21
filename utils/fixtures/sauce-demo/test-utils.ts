import { test } from "@playwright/test";
import { InventoryComponent } from "./pages/inventoryComponent";
import { LoginPage } from "./pages/loginPage";

type Fixtures = {
  inventoryComponent: InventoryComponent;
  loginPage: LoginPage;
};

const customTestExtended = test.extend<Fixtures>({
  inventoryComponent: async ({ page }, use) => {
    await use(new InventoryComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { customTestExtended as test };
export * from "@playwright/test";