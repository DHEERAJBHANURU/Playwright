import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect, Page } from '@playwright/test';


export default class registrationPage{
    private base: PlaywrightWrapper;
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async navigateToMyPage() {
        await this.base.goto("https://bookcart.azurewebsites.net/register");
        await this.page.waitForTimeout(2000);
    }

    async enterDetails(firstName: string, lastName: string, userName: string, password: string, confirmPassword: string) {
        await this.page.getByPlaceholder('First Name').click();
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').click();
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('User name').click();
        await this.page.getByPlaceholder('User name').fill(userName);
        await this.page.getByPlaceholder('Password',{ exact: true }).click();
        await this.page.getByPlaceholder('Password',{ exact: true }).fill(password);
        await this.page.getByPlaceholder('Confirm Password').click();
        await this.page.getByPlaceholder('Confirm Password').fill(confirmPassword);
        await this.page.getByLabel('Male', {exact : true}).check();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', {name: 'Register'}).click();
        await this.page.waitForTimeout(2000);

    }

    async valuateMyPage(message: string) {
        if(await this.page.getByText('New User').isVisible()){
            console.log('Registration failed');
        }
        else{
            console.log('Registration successful');
        }
        
        
    }

}