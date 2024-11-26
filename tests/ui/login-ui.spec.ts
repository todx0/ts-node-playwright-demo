import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixture';
import { SystemErrors } from '../../src/constants/SystemErrors';

test.describe('Login', { tag: '@API' }, () => {
  test('Valid login', async ({ app }) => {
    await app.page.goto('/login');
    await app.login.username.fill(process.env.USERNAME!);
    await app.login.password.fill(process.env.PASSWORD!);
    await app.login.login.click();
    await app.login.logout.first().waitFor({ state: 'visible' });
    expect(app.page.url()).toContain('profile');
  });

  test('Invalid login', async ({ app }) => {
    await app.page.goto('/login');
    await app.login.username.fill(process.env.USERNAME!);
    await app.login.password.fill('invalidpass');
    await app.login.login.click();
    await expect(app.login.error).toHaveText(SystemErrors.INVALID_USERNAME_OR_PASSWORD);
  });
});
