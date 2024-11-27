import { getBooks } from '@src/api/endpoints/bookstore';
import { User } from '@src/api/User';

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
