import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.getByTestId('fetch-data-button').click();
  const orderSent = page.locator('#result-box');
  await orderSent.waitFor();

});
