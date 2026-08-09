import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/LoginPage';
import loginData from '../test-data/loginData.json';

test.describe('US-01: Login Functionality Suite', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
  });

  test('Login exitoso con credenciales válidas', async ({ page }) => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});