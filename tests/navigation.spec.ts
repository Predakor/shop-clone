import { test, expect } from "@playwright/test";

test("should have navigation", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect((await page.title()).includes("Create next app"));
});
