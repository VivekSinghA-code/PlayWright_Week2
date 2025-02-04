import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("demosalesmanager");
    await page.getByLabel('Password').fill("crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.locator("#label").click();
    await page.locator("//a[contains(text(), 'Create Lead')]").click();
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    await page.locator("#createLeadForm_firstName").fill("Test Lead");
    await page.locator("#createLeadForm_lastName").fill("Test Lead");
    await page.locator(".smallSubmit").click();
    await page.locator("//a[text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").fill("TestRise");
    await page.locator("[value='Update']").click();

})