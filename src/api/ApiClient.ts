import { AccountService } from '@src/api/services/AccountService';
import { BookstoreService } from '@src/api/services/BookstoreService';
import { User } from '@src/api/User';

export class ApiClient {
	public user: User;
	public account: AccountService;
	public bookstore: BookstoreService;

	constructor(userDetails: UserDetails) {
		this.user = new User(userDetails);
		this.account = new AccountService(this.user);
		this.bookstore = new BookstoreService(this.user);
	}
}
