import { BookService, UserCredentials, UserDetails } from '../types';
import { getBooks } from './endpoints/bookstore.ts';
import { User } from './User.ts';

export class ApiApp {
  public user: User;
  public userCredentials: UserCredentials;
  public userDetails: UserDetails;
  public service: {
    books: BookService;
  };

  constructor(userDetails: UserDetails) {
    this.userDetails = userDetails;
    this.user = new User(this.userDetails);
    this.service = {
      books: {
        get: async () => getBooks(this.user),
      },
    };
  }
}
