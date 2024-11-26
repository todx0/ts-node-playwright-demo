import type { LoginResponse, UserDetails } from '../types.d.ts';
import { getToken, login } from './endpoints/authentication.ts';

export class User {
  public userDetails: UserDetails;
  public lastLoginDetails: LoginResponse;

  constructor(userDetails: UserDetails) {
    this.userDetails = userDetails;
  }

  async resetTokenIfExpired() {
    if (!this.userDetails.token || this.isExpired(this.userDetails)) {
      const token = await getToken(this.userDetails);
      this.userDetails.token = token;
    }
  }

  isExpired(userDetails: UserDetails): boolean {
    if (userDetails?.expires) return new Date(userDetails.expires) < new Date();
    return true;
  }

  async init() {
    await this.resetTokenIfExpired();
    const loginRes: LoginResponse = await login(this.userDetails);
    this.lastLoginDetails = loginRes;
    return this.lastLoginDetails;
  }
}
