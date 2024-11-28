import { expect } from '@playwright/test';
import { test } from '@src/fixtures/fixture';
import { PageApp } from '@src/pages/PageApp';

test.describe('Bookstore', { tag: '@API' }, () => {
  test('Get Books', async ({ app }) => {
    const books = await app.api.service.books.get();
    expect(books.length).toBeGreaterThan(0);
  });

  test('Add Books', async ({ app }) => {
    await app.api.service.books.delete();
    const isbn = '9781593275846';
    const addBooks = await app.api.service.books.add({
      userId: app.api.user.lastLoginDetails.userId,
      collectionOfIsbns: [{ isbn }],
    });
    expect(addBooks.books[0].isbn).toEqual(isbn);
  });
});

test.describe('Authentication', { tag: '@API' }, () => {
  test('Get Authorized', async ({ app }) => {
    const authorizedResponse = await app.api.service.account.getAuthorized();
    expect(authorizedResponse).toBeTruthy();
  });

  test('CRUD User', async ({ page, app }) => {
    const userCredentials = { userName: 'testUserx5558', password: 'MultipassportKD3307!' };

    const createUserResponse = await app.api.service.account.user.create(userCredentials);

    const newApp = new PageApp(page, userCredentials);
    await newApp.api.user.init();

    const getUserResponseAfterCreate = await newApp.api.service.account.user.get(
      newApp.api.user.lastLoginDetails.userId,
    );

    expect(createUserResponse.userID).toEqual(newApp.api.user.lastLoginDetails.userId);
    expect(createUserResponse.username).toEqual(userCredentials.userName);
    expect(getUserResponseAfterCreate.userId).toEqual(newApp.api.user.lastLoginDetails.userId);
    expect(getUserResponseAfterCreate.username).toEqual(userCredentials.userName);

    await newApp.api.service.account.user.delete(createUserResponse.userID);
  });
});
