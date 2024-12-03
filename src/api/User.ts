import { generateToken, login } from '@src/api/endpoints/account';
import { AuthenticationStatus } from '@src/constants/AuthentificationStatus';

export class User {
	public userDetails: UserDetails;
	public lastLoginDetails: LoginResponse | null = null;
	public authStatus: AuthenticationStatus = AuthenticationStatus.INITIAL;

	constructor(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	async resetTokenIfExpired(): Promise<boolean> {
		try {
			if (!this.userDetails.token || this.isExpired(this.userDetails)) {
				const tokenResponse = await generateToken(this.userDetails);
				this.userDetails.token = tokenResponse.token;
				this.userDetails.expires = tokenResponse.expires;
				this.authStatus = AuthenticationStatus.TOKEN_REFRESHED;
				return true;
			}
			return false;
		} catch (error) {
			this.authStatus = AuthenticationStatus.ERROR;
			throw new Error(`Token generation failed: ${error.message}`);
		}
	}

	isExpired(userDetails: UserDetails): boolean {
		return !userDetails?.expires || new Date(userDetails.expires) <= new Date();
	}

	async init(): Promise<LoginResponse> {
		try {
			await this.resetTokenIfExpired();

			const loginResponse = await login(this.userDetails);
			this.lastLoginDetails = loginResponse;
			this.authStatus = AuthenticationStatus.LOGGED_IN;

			return this.lastLoginDetails;
		} catch (error) {
			this.authStatus = AuthenticationStatus.ERROR;
			throw new Error(`Login failed: ${error.message}`);
		}
	}
}
