import { Book } from '../../types';
import { Agent } from '../Agent.ts';
import { User } from '../User.ts';

export async function getBooks(user: User) {
  const response: { books: Book[] } = await Agent.getInstance().get(
    user,
    `${process.env.URL}/BookStore/v1/Books`,
  );
  return response.books;
}
