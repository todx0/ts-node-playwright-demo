import { test as base } from '@playwright/test';
import { PageApp } from '@src/pages/PageApp';
import { getTestUsers } from '@utils/helpers';

const testUsers = getTestUsers();

export const test = base.extend<CustomFixtures>({
  randomTestUser: async ({}, use: any, workerInfo: any) => {
    if (!testUsers) throw new Error('No test users.');

    const userIndex = workerInfo.workerIndex % testUsers.length;

    if (!process.env.CI) console.info('Using user:', testUsers[userIndex]);

    await use(testUsers[userIndex]);
  },

  app: async ({ browser, randomTestUser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const app = new PageApp(page, {
      userName: randomTestUser,
      password: process.env.PASSWORD!,
    });

    await app.service.user.init();

    await use(app);

    await page.close();
    await context.close();
  },
});
