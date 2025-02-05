import { chromium, expect, test } from "@playwright/test";
import { log } from "node:console";

test('Test to edit individuals',async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill("ravindran.ramdas@testleaf.com");
    await page.getByLabel('Password').fill("Indran#1432");
    await page.locator("//input[@type='submit']").click();
   
    await page.locator(".slds-icon-waffle").click();
    await page.locator("(//button[@class='slds-button'])[2]").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("//input[@type='search' and @part='input']").fill("Vivek");
    await page.keyboard.press('Enter');
    // await page.locator("//a[text()='Vivek']").click();
    await page.locator("(//a[@role='button'])[16]").click();
    await page.locator("(//div[@title='Edit'])[1]").click();
    await page.locator("(//a[@role='combobox'])[1]").click();
    await page.locator("//a[text()='Mr.']").click();
    await page.locator("//input[@placeholder='First Name']").fill("Singh");
    await page.locator("//button[@title='Save']").click();

})