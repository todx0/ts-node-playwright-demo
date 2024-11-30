import { User } from '@src/api/User';
import { createAccount, deleteUser, generateToken, getAuthorized, getUser } from '@src/api/endpoints/account';
import { addBooks, deleteBooks, getBooks } from '@src/api/endpoints/bookstore';

export class ApiClient {
	public user: User;
	public bookstore: BooksService;
	public account: AccountService;

	constructor(userDetails: UserDetails) {
		this.user = new User(userDetails);
		this.bookstore = {
			get: async () => getBooks(this.user),
			add: async (list: ListOfISBNs) => addBooks(this.user, list),
			delete: async () => deleteBooks(this.user),
		};
		this.account = {
			authorize: async (credentials: UserCredentials) => generateToken(credentials),
			getAuthorized: async () => getAuthorized(this.user),
			user: {
				create: async (credentials: UserCredentials) => createAccount(credentials),
				delete: async (uid: string) => deleteUser(this.user, uid),
				get: async (uid: string) => getUser(this.user, uid),
			},
		};
	}
}
