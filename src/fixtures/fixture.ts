import { test as base } from '@playwright/test';
import { AppFixture } from '../../types/types';
import { PageApp } from '../pages/PageApp';

export const test = base.extend<AppFixture>({
  app: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const app = new PageApp(page, {
      userName: process.env.USERNAME!,
      password: process.env.PASSWORD!,
    });

    await use(app);

    await page.close();
    await context.close();
  },
});
