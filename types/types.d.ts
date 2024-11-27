import { PageApp } from '@src/pages/PageApp';

declare global {
  interface UserCredentials {
    userName: string;
    password: string;
  }

  interface UserDetails extends UserCredentials {
    token?: string;
    expires?: string;
  }

  interface LoginResponse extends Response {
    userId?: string;
    userName?: string;
    password?: string;
    token?: string;
    expires?: string;
    created_date?: string;
    isActive?: boolean;
  }

  interface AppFixture {
    app: PageApp;
  }

  interface FetchFunction {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
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

  interface BookService {
    get: () => Promise<Book[]>;
  }

  interface TokenResponse {
    token: string;
    expires: string;
    status: string;
    result: string;
  }
}

export {};
