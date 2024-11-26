import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixture';

test.describe('Bookstore', { tag: '@UI' }, () => {
  test('Get Books', async ({ app }) => {
    const books = await app.api.service.books.get();
    expect(books.length).toBeGreaterThan(0);
  });
});
