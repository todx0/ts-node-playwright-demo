import type { User } from '@src/api/User';
import { retryFetch } from '@utils/helpers';

export class HttpAgent {
	private static instance: HttpAgent;

	static getInstance(): HttpAgent {
		if (!HttpAgent.instance) HttpAgent.instance = new HttpAgent();
		return HttpAgent.instance;
	}

	private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
		// console.info('Request ->, endpoint, options);
		const response = await retryFetch(endpoint, options);
		const contentType = response.headers.get('Content-Type');

		if (!response.ok) {
			const errorBody = await response.text();
			throw new Error(`Request failed with status ${response.status}. Response: ${errorBody}`);
		}

		const responseBody = contentType?.includes('application/json') ? ((await response.json()) as T) : ((await response.text()) as T);

		// console.info(Response ->, responseBody);
		return responseBody;
	}

	async get<T>(user: User | undefined, endpoint: string): Promise<T> {
		if (user) await user.init();
		return this.request<T>(endpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user?.lastLoginDetails?.token}`,
			},
		});
	}

	async post<T>(user: User | undefined, endpoint: string, body: unknown): Promise<T> {
		if (user) await user.init();
		return this.request<T>(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user?.lastLoginDetails?.token}`,
			},
			body: JSON.stringify(body),
		});
	}

	async put<T>(user: User | undefined, endpoint: string, body: unknown): Promise<T> {
		if (user) await user.init();
		return this.request<T>(endpoint, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user?.lastLoginDetails?.token}`,
			},
			body: JSON.stringify(body),
		});
	}

	async delete<T>(user: User, endpoint: string): Promise<T> {
		if (user) await user.init();
		return this.request<T>(endpoint, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user?.lastLoginDetails?.token}`,
			},
		});
	}
}
