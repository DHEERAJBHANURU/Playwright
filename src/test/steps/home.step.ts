import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import HomePage from "../../pages/homepage";
import { Page } from "@playwright/test";



Given('user navigate to the google home page', async function(){
    const homePage = new HomePage(fixture.page as Page);
    await homePage.navigateToHomePage();
});

When('user search for playwright', async function(){
    console.log("search for playwright");

});

Then('user should see the search results', async function(){
    console.log("verify the search Results");

});