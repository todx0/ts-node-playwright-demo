import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
	testDir: 'tests',
	fullyParallel: true,
	workers: 4,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? [['allure-playwright'], ['list'], ['blob'], ['github']] : 'list',
	use: {
		baseURL: process.env.URL,
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
