import { addBooks, deleteBooks, getBooks } from '@src/api/endpoints/bookstore';
import type { User } from '@src/api/User';

export class BookstoreService {
	private user: User;

	constructor(user: User) {
		this.user = user;
	}

	async get() {
		return getBooks(this.user);
	}

	async add(list: ListOfISBNs) {
		return addBooks(this.user, list);
	}

	async delete() {
		return deleteBooks(this.user);
	}
}
