import { expect } from '@playwright/test';
import { SystemErrors } from '@src/constants/SystemErrors';
import { test } from '@src/fixtures/test';
import { Config } from '@utils/Config';

test.describe('Login', { tag: '@UI' }, () => {
	test('Valid login', async ({ app }) => {
		await app.page.goto('/login');
		await app.login.username.fill(app.user.userName);
		await app.login.password.fill(Config.PASSWORD);
		await app.login.login.click();
		await app.login.logout.first().waitFor({ state: 'visible' });
		expect(app.page.url()).toContain('profile');
	});

	test('Invalid login', async ({ app }) => {
		await app.page.goto('/login');
		await app.login.username.fill(app.user.userName);
		await app.login.password.fill('invalidpass');
		await app.login.login.click();
		await expect(app.login.error).toHaveText(SystemErrors.INVALID_USERNAME_OR_PASSWORD);
	});
});
