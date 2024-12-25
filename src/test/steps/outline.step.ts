import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { OutlinePage } from "../../pages/outlinepage";

let outline: OutlinePage;

Given('user navigate to the google a home page', async function() {
    const outline = new OutlinePage(fixture.page);
    await outline.navigateToOutlinePage();
});

When('user search for {string}', async function(searchValue: string) {
    const outline = new OutlinePage(fixture.page);
    await outline.searchForTopic(searchValue);
});

Then('user should see the {string} search results', async function(searchValue: string) {
    const outline = new OutlinePage(fixture.page);
    await outline.verifySearchResult(searchValue);
});
