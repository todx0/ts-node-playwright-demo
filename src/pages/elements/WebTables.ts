import type { Locator, Page } from '@playwright/test';

export class WebTables {
	readonly page: Page;
	readonly table: Locator;

	constructor(page: Page) {
		this.page = page;
		this.table = this.page.locator('.ReactTable');
	}
}
