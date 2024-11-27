import { type Locator, type Page } from '@playwright/test';
import { ApiApp } from '@src/api/ApiApp';
import { Login } from '@src/pages/login/Login';

export class PageApp {
  public readonly page: Page;
  public readonly login: Login;
  public readonly api: ApiApp;

  constructor(page: Page, user: UserCredentials) {
    this.page = page;
    this.login = new Login(page);
    this.api = new ApiApp(user);
  }
}
