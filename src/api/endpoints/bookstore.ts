import { Agent } from '@src/api/Agent';
import { User } from '@src/api/User';

export async function getBooks(user: User) {
  const response: { books: Book[] } = await Agent.getInstance().get(
    user,
    `${process.env.URL}/BookStore/v1/Books`,
  );
  return response.books;
}
