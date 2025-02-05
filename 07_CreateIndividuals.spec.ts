import { chromium, expect, test } from "@playwright/test";
import { log } from "node:console";

test('Test to create individuals',async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill("ravindran.ramdas@testleaf.com");
    await page.getByLabel('Password').fill("Indran#1432");
    await page.locator("//input[@type='submit']").click();
   
    await page.locator(".slds-icon-waffle").click();
    await page.locator("(//button[@class='slds-button'])[2]").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("//a[div[@title='New'] and @role='button']").click();
    await page.locator("//input[@placeholder='Last Name']").fill("Vivek");
    await page.locator("//button[@title='Save']").click();
})
