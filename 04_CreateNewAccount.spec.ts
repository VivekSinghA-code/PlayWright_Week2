import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("demosalesmanager");
    await page.getByLabel('Password').fill("crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.locator("#label").click();
    let title=page.title();
    console.log("The title of the page is "+title);
    let url=page.url();
    console.log("The url of the page is "+url);
    
    await page.locator("//a[text()='Create Account']").click();










})