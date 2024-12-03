import { HttpAgent } from '@src/api/HttpAgent';
import type { User } from '@src/api/User';

export async function login(body = {}) {
	const response: LoginResponse = await HttpAgent.getInstance().post(undefined, `${process.env.URL}/Account/v1/Login`, body);
	return response;
}

export async function generateToken(body = {}) {
	const response: TokenResponse = await HttpAgent.getInstance().post(undefined, `${process.env.URL}/Account/v1/GenerateToken`, body);
	return response;
}

export async function getAuthorized(user: User) {
	const response: AuthorizedResponse = await HttpAgent.getInstance().post(user, `${process.env.URL}/Account/v1/Authorized`, {
		userName: user.userDetails.userName,
		password: user.userDetails.password,
	});
	return response;
}

export async function createAccount(credentials: UserCredentials) {
	const response: CreateUserResponse = await HttpAgent.getInstance().post(undefined, `${process.env.URL}/Account/v1/User`, credentials);
	return response;
}

export async function deleteUser(user: User, uid: string) {
	const response: GenericResponse = await HttpAgent.getInstance().delete(user, `${process.env.URL}/Account/v1/User/${uid}`);
	return response;
}

export async function getUser(user: User, uid: string) {
	const response: GetUserResponse = await HttpAgent.getInstance().get(user, `${process.env.URL}/Account/v1/User/${uid}`);
	return response;
}
