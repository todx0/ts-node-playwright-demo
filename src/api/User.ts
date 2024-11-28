import { generateToken, login } from '@src/api/endpoints/account';

export class User {
  public userDetails: UserDetails;
  public lastLoginDetails: LoginResponse;

  constructor(userDetails: UserDetails) {
    this.userDetails = userDetails;
  }

  async resetTokenIfExpired() {
    if (!this.userDetails.token || this.isExpired(this.userDetails)) {
      const tokenResponse = await generateToken(this.userDetails);
      this.userDetails.token = tokenResponse.token;
    }
  }

  isExpired(userDetails: UserDetails) {
    return new Date(userDetails?.expires) > new Date();
  }

  async init() {
    await this.resetTokenIfExpired();
    const loginRes: LoginResponse = await login(this.userDetails);
    this.lastLoginDetails = loginRes;
    return this.lastLoginDetails;
  }
}
