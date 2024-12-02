import { createAccount, deleteUser, generateToken, getAuthorized, getUser } from '@src/api/endpoints/account';
import type { User } from '@src/api/User';

export class AccountService {
	private user: User;

	constructor(user: User) {
		this.user = user;
	}

	async authorize(credentials: UserCredentials) {
		return generateToken(credentials);
	}

	async getAuthorized() {
		return getAuthorized(this.user);
	}

	async createUser(credentials: UserCredentials) {
		return createAccount(credentials);
	}

	async deleteUser(uid: string) {
		return deleteUser(this.user, uid);
	}

	async getUser(uid: string) {
		return getUser(this.user, uid);
	}
}
