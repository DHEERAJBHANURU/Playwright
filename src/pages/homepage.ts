import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
export default class HomePage {
    
    private website: PlaywrightWrapper;
    constructor(private page: Page) {
        this.website = new PlaywrightWrapper(page);
    }
    public Elements = {
        searchBox: `//textarea[@aria-label="Search"]`,
        searchButton: `//input[@aria-label="Google Search"]`,
        message: `//h3[text()="Playwright: Fast and reliable end-to-end testing for modern web apps"]`
    }

    async navigateToHomePage() {
        await this.website.goto("https://www.google.com");
        const searchBox = this.page.locator(this.Elements.searchBox);

        await searchBox.fill("Playwright");
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press("Escape");
        const searchButton = this.page.locator(this.Elements.searchButton).nth(1)
        await searchButton.click();

        const message = this.page.locator(this.Elements.message);
        await expect(message).toBeVisible();
    }
}
