import { test } from "@playwright/test";
import {
  NEOWIN_URL,
  NEOWIN_ADS,
} from "../../../utils/fixtures/sauce-demo/constants";

test("should block ads on neowin.net", async ({ page }) => {
  await page.route("**/*", (route) => {
    const url = route.request().url();

    if (NEOWIN_ADS.some((d) => url.startsWith(d))) {
      route.abort();
    } else {
      route.continue();
    }
  });

  await page.goto(NEOWIN_URL);
});
