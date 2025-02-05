import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("//input[@id='username']", "demosalesmanager");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.locator("#label").click();
    await page.locator("//a[contains(text(), 'Leads')]").click();
    await page.locator("//a[contains(text(), 'Find Leads')]").click();
    await page.locator("//div[@class='x-grid3-hd-inner x-grid3-hd-partyId']").click();
    await page.locator("//div[@class='x-grid3-hd-inner x-grid3-hd-partyId']").click();
    await page.locator("//a[text()='10071']").click();
    await page.locator("//a[contains(text(), 'Edit')]").click();
    await page.locator("#updateLeadForm_companyName").fill("TestUPDLeaf");
    await page.locator("#updateLeadForm_annualRevenue").fill("999999");
    await page.locator("#updateLeadForm_departmentName").fill("New Department");
    await page.locator("#updateLeadForm_description").fill("This is the description");
    await page.locator("[value='Update']").click();
})