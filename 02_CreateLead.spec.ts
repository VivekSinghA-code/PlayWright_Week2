import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill("//input[@id='username']", "demosalesmanager");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@type='submit']").click();
    await page.locator("#label").click();
    await page.locator("//a[contains(text(), 'Create Lead')]").click();
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    await page.locator("#createLeadForm_firstName").fill("Test Lead");
    await page.locator("#createLeadForm_lastName").fill("Test Lead");
    await page.locator("#createLeadForm_firstNameLocal").fill("Vivek");
    await page.locator("#createLeadForm_lastNameLocal").fill("Vivek");
    await page.locator(".smallSubmit").click();
    const status=page.locator("#viewLead_statusId_sp");
    const statusText=await status.innerText();
    if(statusText=='Assigned'){
        console.log("The lead is created successfully");
    }
    else{
        console.log("The lead is not created");
    }
    console.log("The status of the created lead is "+statusText)


})