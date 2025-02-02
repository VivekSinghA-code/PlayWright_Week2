import {chromium, test} from "@playwright/test";
test('Test to launch browser',async()=>{

//Create browser instance

const browser= await chromium.launch();

//create browser context

const context= await browser.newContext();

//create new page

const page=await context.newPage();

//load the url

await page.goto("https://login.salesforce.com/?locale.in");

//Get the url
const url= page.url();

//const title= await page.title();
console.log(url);
//console.log(title);

})