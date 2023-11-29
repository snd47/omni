const { test, expect } = require('@playwright/test');
const { ENVIRONMENTS } = require("../data/environments.js");
const { CREDENTIALS} = require("../data/users.js");
const { LoginPage } = require("../page-objects/loginPage.js");
const { ChatPage } = require("../page-objects/chatPage.js");

test.describe("Login flow", () => {
    
  test.beforeEach(async ({ page }) => {
      await page.goto(`${ENVIRONMENTS.DEV.ENV_URL + '/login'}`); 
    });

  test('verify positive login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const chatPage = new ChatPage(page); 
    await loginPage.login(CREDENTIALS.USER.EMAIL, CREDENTIALS.USER.PASSWORD);
    await expect(chatPage.getLogoCompany()).toContainText("Test company");
    // await expect(page).toHaveURL(/.*chats/); 
  });

  test('verify negative login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(`${CREDENTIALS.USER.EMAIL + 'wrong'}`, CREDENTIALS.USER.PASSWORD);
    await expect(loginPage.getwrongCredentialsMessage()).toContainText("Wrong Email or password");
  });

});