import { chromium, expect, test } from "@playwright/test";
import { log } from "node:console";

test('Test to automate the leaftaps',async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill("ravindran.ramdas@testleaf.com");
    await page.getByLabel('Password').fill("Indran#1432");
    await page.locator("//input[@type='submit']").click();
    let title= await page.title();
    let url  =   page.url();
  
    console.log("The title of the page is "+title);
    console.log("The url of the page is "+url)
    await page.locator(".slds-icon-waffle").click();
    await page.getByPlaceholder('Search apps and items...').fill("Service");
    await page.locator("(//div[@class='slds-size_small'])[1]").click();
    //await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    //await page.locator("(//div[@class='slds-size_small'])[1]").click();
    await page.locator("(//a[@class='slds-context-bar__label-action dndItem'])[3]").click();
    //await page.locator("[text()='Accounts']").click();
    await page.locator("//div[@title='New']").click();//dom>con
    await page.locator("[name='Name']").fill("Vivek");
    await page.locator("//button[@name='SaveEdit']").click();
    //to freeze the dom to get toast element, give the code:setTimeout(function(){debugger;},3000);
    //  in dom console
    let alert=page.locator("//div[@class='slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage']");
    
    const isVisible = await alert.isVisible();
    if(isVisible){
        console.log("The toase message is displayed");
    }
    else{
        console.log("The toast message is not displayed");
    }
    //await expect(isVisible).toHaveText("Vivek");

    
    




})