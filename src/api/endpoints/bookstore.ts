import { HttpAgent } from '@src/api/HttpAgent';
import type { User } from '@src/api/User';

export async function getBooks(user: User) {
	const response: BooksResponse = await HttpAgent.getInstance().get(user, `${process.env.URL}/BookStore/v1/Books`);
	return response.books;
}

export async function addBooks(user: User, list: ListOfISBNs) {
	const response: BooksResponse = await HttpAgent.getInstance().post(user, `${process.env.URL}/BookStore/v1/Books`, list);
	return response;
}

export async function deleteBooks(user: User) {
	if (!user.lastLoginDetails?.userId) throw Error('No userId provided.');
	const response: GenericResponse = await HttpAgent.getInstance().delete(
		user,
		`${process.env.URL}/BookStore/v1/Books?UserId=${user.lastLoginDetails.userId}`,
	);
	return response;
}
