import { expect } from '@playwright/test';
import { test } from '@src/fixtures/test';
import { PageApp } from '@src/pages/PageApp';

test.describe('Bookstore', { tag: '@API' }, () => {
	test('Get Books', async ({ app }) => {
		const books = await app.service.bookstore.get();
		expect(books.length).toBeGreaterThan(0);
	});

	test('Add Books', async ({ app }) => {
		await app.service.bookstore.delete();
		const isbn = '9781593275846';
		const addBooks = await app.service.bookstore.add({
			userId: app.service.user.lastLoginDetails.userId,
			collectionOfIsbns: [{ isbn }],
		});
		expect(addBooks.books[0].isbn).toEqual(isbn);
	});
});

test.describe('Authentication', { tag: '@API' }, () => {
	test('Get Authorized', async ({ app }) => {
		const authorizedResponse = await app.service.account.getAuthorized();
		expect(authorizedResponse).toBeTruthy();
	});

	test('CRUD User', async ({ page, app }) => {
		const userCredentials = {
			userName: 'testUserx41000',
			password: 'MultipassportKD3307!',
		};
		const createUserResponse = await app.service.account.createUser(userCredentials);
		const newApp = new PageApp(page, userCredentials);
		await newApp.service.user.init();
		const getUserResponseAfterCreate = await newApp.service.account.getUser(newApp.service.user.lastLoginDetails.userId);

		expect(createUserResponse.userID).toEqual(newApp.service.user.lastLoginDetails.userId);
		expect(createUserResponse.username).toEqual(userCredentials.userName);
		expect(getUserResponseAfterCreate.userId).toEqual(newApp.service.user.lastLoginDetails.userId);
		expect(getUserResponseAfterCreate.username).toEqual(userCredentials.userName);

		await newApp.service.account.deleteUser(createUserResponse.userID);
	});
});
