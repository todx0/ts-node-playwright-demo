import { test as base } from '@playwright/test';
import { PageApp } from '@src/pages/PageApp';
import { Config } from '@utils/Config';
import { getTestUsers, retry } from '@utils/helpers';

export const test = base.extend<CustomFixtures>({
	randomTestUser: async ({}, use, workerInfo) => {
		const testUsers = getTestUsers();
		const userIndex = workerInfo.workerIndex % testUsers.length;
		const testUser = testUsers[userIndex];
		if (!process.env.CI) console.info(`Using user: ${testUser}`);

		await use(testUsers[userIndex]);
	},

	app: async ({ browser, randomTestUser }, use) => {
		const context = await browser.newContext();
		const page = await context.newPage();

		try {
			const app = new PageApp(page, {
				userName: randomTestUser,
				password: Config.PASSWORD,
			});

			await retry(() => app.service.user.init());

			await use(app);
		} catch (error) {
			throw Error(`Failed to initialized app. ${error.message}`);
		} finally {
			await page.close();
			await context.close();
		}
	},
});
