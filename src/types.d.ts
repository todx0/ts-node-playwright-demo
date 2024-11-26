import { PageApp } from '../src/pages/PageApp';

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserDetails extends UserCredentials {
  token?: string;
  expires?: string;
}

export interface LoginResponse extends Response {
  userId?: string;
  userName?: string;
  password?: string;
  token?: string;
  expires?: string;
  created_date?: string;
  isActive?: boolean;
}

export interface AppFixture {
  app: PageApp;
}

export interface FetchFunction {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export interface Book {
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

export interface BookService {
  get: () => Promise<Book[]>;
}
