import { generateToken, login } from '@src/api/endpoints/account';

export class User {
	public userDetails: UserDetails;
	public lastLoginDetails: LoginResponse;

	constructor(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	async resetTokenIfExpired() {
		if (!this.userDetails.token || this.isExpired(this.userDetails)) {
			try {
				const tokenResponse = await generateToken(this.userDetails);
				this.userDetails.token = tokenResponse.token;
			} catch (error) {
				throw new Error(`Token generation failed: ${error.message}`);
			}
		}
	}

	isExpired(userDetails: UserDetails) {
		return new Date(userDetails?.expires) <= new Date();
	}

	async init() {
		await this.resetTokenIfExpired();
		const loginResponse = await login(this.userDetails);
		this.lastLoginDetails = loginResponse;
		return this.lastLoginDetails;
	}
}
