import { type Locator, type Page } from '@playwright/test';
import { ApiClient } from '@src/api/ApiClient';
import { WebTables } from '@src/pages/elements/WebTables';
import { Login } from '@src/pages/login/Login';

export class PageApp {
  public readonly page: Page;
  public readonly login: Login;
  public readonly service: ApiClient;
  public readonly webTable: WebTables;

  constructor(page: Page, user: UserCredentials) {
    this.service = new ApiClient(user);

    this.page = page;
    this.login = new Login(page);
    this.webTable = new WebTables(page);
  }
}
