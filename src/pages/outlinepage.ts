import { expect,Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export class OutlinePage {
    private base: PlaywrightWrapper;
    private page: Page;
    constructor(page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements={
        searchBox: `//textarea[@aria-label="Search"]`,
        searchButton: `//input[@aria-label="Google Search"]`,
        message: `//h3[text()="Playwright: Fast and reliable end-to-end testing for modern web apps"]`,
        typescriptmessage:`//h3[text()="TypeScript: JavaScript With Syntax For Types."]`
    }


    public async navigateToOutlinePage() {
        await this.base.goto("https://www.google.com");
    }

    public async searchForTopic(searchValue: string) {
        const searchBox = this.page.locator(this.Elements.searchBox).nth(1);
        await searchBox.fill(searchValue);
        // if(searchValue === 'playwright'){
        //     await this.page.waitForTimeout(2000);
        //     await this.page.keyboard.press('Escape');
        //     await this.page.waitForTimeout(2000);
        //     const searchBox = this.page.locator(this.Elements.searchBox).nth(1);
        // }
        // else{
        // await this.page.keyboard.press('Enter');
        // await this.page.waitForTimeout(2000);

        // }
    }

    async verifySearchResult(searchValue: string) {
        if(searchValue === 'playwright'){ 
            await this.page.waitForTimeout(2000);
            const message = this.page.locator(this.Elements.typescriptmessage);
            await expect(message).toBeVisible();
        }
        else{
            await this.page.waitForTimeout(2000);
            const message = this.page.locator(this.Elements.message);
            await expect(message).toBeVisible();
        }

        
        
    }
}