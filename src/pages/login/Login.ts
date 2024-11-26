import { type Locator, type Page } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly login: Locator;
  readonly logout: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('#userName');
    this.password = this.page.locator('#password');
    this.login = this.page.locator('#login');
    this.logout = this.page.locator('button#submit:text("Log out")');
    this.error = this.page.locator('p#name');
  }
}
