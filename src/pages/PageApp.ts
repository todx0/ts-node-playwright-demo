import type { Locator, Page } from '@playwright/test';
import { ApiClient } from '@src/api/ApiClient';
import { WebTables } from '@src/pages/elements/WebTables';
import { Login } from '@src/pages/login/Login';

export class PageApp {
	public readonly page: Page;
	public readonly login: Login;
	public readonly service: ApiClient;
	public readonly webTable: WebTables;
	public readonly user: UserCredentials;

	constructor(page: Page, user: UserCredentials) {
		this.user = user;
		this.page = page;

		this.service = new ApiClient(user);

		this.login = new Login(page);
		this.webTable = new WebTables(page);
	}
}
