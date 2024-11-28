import { type Locator, type Page } from '@playwright/test';
import { ApiClient } from '@src/api/ApiClient';
import { Login } from '@src/pages/login/Login';

export class PageApp {
  public readonly page: Page;
  public readonly login: Login;
  public readonly service: ApiClient;

  constructor(page: Page, user: UserCredentials) {
    this.page = page;
    this.login = new Login(page);
    this.service = new ApiClient(user);
  }
}
