import { createAccount, deleteUser, generateToken, getAuthorized, getUser } from '@src/api/endpoints/account';
import { addBooks, deleteBooks, getBooks } from '@src/api/endpoints/bookstore';

import { User } from '@src/api/User';

export class ApiApp {
  public user: User;
  public userCredentials: UserCredentials;
  public userDetails: UserDetails;
  public service: {
    books: BooksService;
    account: AccountService;
  };

  constructor(userDetails: UserDetails) {
    this.userDetails = userDetails;
    this.user = new User(this.userDetails);
    this.service = {
      books: {
        get: async () => getBooks(this.user),
        add: async (list: ListOfISBNs) => addBooks(this.user, list),
        delete: async () => deleteBooks(this.user),
      },
      account: {
        authorize: async (credentials: UserCredentials) => generateToken(credentials),
        getAuthorized: async () => getAuthorized(this.user),
        user: {
          create: async (credentials: UserCredentials) => createAccount(credentials),
          delete: async (uid: string) => deleteUser(this.user, uid),
          get: async (uid: string) => getUser(this.user, uid),
        },
      },
    };
  }
}
