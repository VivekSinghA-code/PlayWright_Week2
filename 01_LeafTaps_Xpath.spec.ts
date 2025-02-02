import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill("//input[@id='username']", "demosalesmanager");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@type='submit']").click();
    let title=await page.title();
    console.log(title);
    await page.locator("//input[@value='Logout']").click();

})
