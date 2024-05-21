import { Page } from "@playwright/test";
import { loginButton, passwordInput, usernameInput } from "../constants";

export class LoginPage {
  constructor(public page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator(usernameInput).fill(username);
    await this.page.locator(passwordInput).fill(password);
    await this.page.locator(loginButton).click();
    // await this.page.waitForURL("/");
  }
}
