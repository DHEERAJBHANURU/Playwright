import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import registrationPage from "../../pages/registration";


let register: registrationPage;

Given('user navigate to the book cart website', async function () {
    register = new registrationPage(fixture.page);
    await register.navigateToMyPage();

});

When('user enters {string}, {string}, {string}, {string}, {string} and clicks on register', async function (firstName, lastName, userName, password, confirmPassword) {
    register = new registrationPage(fixture.page);
    await register.enterDetails(firstName, lastName, userName, password, confirmPassword);

});

Then('user should see the success message {string}', async function (message: string) {
    register = new registrationPage(fixture.page);
    await register.valuateMyPage(message);


});

