import type { PageApp } from '@src/pages/PageApp';

declare global {
	/** APP */

	interface CustomFixtures extends AppFixture {
		randomTestUser: string;
	}

	interface UserCredentials {
		userName: string;
		password: string;
	}

	interface UserDetails extends UserCredentials {
		token?: string;
		expires?: string;
	}

	interface AppFixture {
		app: PageApp;
	}

	interface CreateUserResponse {
		userID: string;
		username: string;
		books?: Book[];
	}

	interface GetUserResponse {
		userId: string;
		username: string;
		books?: Book[];
	}

	interface AccountService {
		getAuthorized: () => Promise<AuthorizedResponse>;
		authorize: (credentials: UserCredentials) => Promise<TokenResponse>;
		user: {
			create: (credentials: UserCredentials) => Promise<CreateUserResponse>;
			delete: (uid: string) => Promise<GenericResponse | undefined>;
			get: (uid: string) => Promise<GetUserResponse>;
		};
	}

	interface BooksService {
		get: () => Promise<Book[]>;
		add: (list: ListOfISBNs) => Promise<BooksResponse>;
		delete: () => Promise<GenericResponse>;
	}

	/** HELPERS */

	type FetchFunction = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

	/** API RESPONSES */

	interface ListOfISBNs {
		userId: string;
		collectionOfIsbns: Array<{
			isbn: string;
		}>;
	}

	interface AddBookResponse {
		isbn: 'string';
	}

	interface Book {
		isbn: string;
		title: string;
		subTitle: string;
		author: string;
		publish_date: string;
		publisher: string;
		pages: number;
		description: string;
		website: string;
	}

	interface TokenResponse {
		token: string;
		expires: string;
		status: string;
		result: string;
	}

	interface LoginResponse {
		userId: string;
		userName: string;
		password: string;
		token: string;
		expires: string;
		created_date: string;
		isActive: boolean;
	}

	interface BooksResponse {
		books: Book[];
	}

	interface GenericResponse {
		code?: number;
		userId?: string;
		message: string;
	}

	type AuthorizedResponse = boolean | GenericResponse;
}
