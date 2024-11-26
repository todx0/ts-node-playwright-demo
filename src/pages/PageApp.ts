import { type Locator, type Page } from '@playwright/test';
import { ApiApp } from '../api/ApiApp';
import { UserCredentials } from '../types';
import { Login } from './login/Login';

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
