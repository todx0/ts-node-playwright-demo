import { expect } from '@playwright/test';
import { test } from '@src/fixtures/test';
import { webTableSnapshot } from '@src/fixtures/webTableSnapshot';

test.describe('Web Tables', { tag: '@UI' }, () => {
	test('Web Table match snapshot', async ({ app }) => {
		await app.page.goto('/webtables');
		await expect(app.webTable.table).toMatchAriaSnapshot(webTableSnapshot);
	});
});
