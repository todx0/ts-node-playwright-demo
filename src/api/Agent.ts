import { retryFetch } from '../../utils/helpers.ts';
import { User } from './User.ts';

export class Agent {
  private static instance: Agent;

  static getInstance(): Agent {
    return Agent.instance ??= new Agent();
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit,
  ): Promise<T> {
    const response = await retryFetch(endpoint, options);
    const contentType = response.headers.get('Content-Type');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}. ${response.body}`);
    }

    return contentType?.includes('application/json')
      ? (await response.json()) as T
      : (await response.text()) as T;
  }

  async get<T>(user: User, endpoint: string): Promise<T> {
    await user.init();
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(user: User | undefined, endpoint: string, body: unknown): Promise<T> {
    if (user) await user.init();
    return this.request<T>(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async put<T>(user: User, endpoint: string, body: unknown): Promise<T> {
    await user.init();
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async patch<T>(user: User, endpoint: string, body: unknown): Promise<T> {
    await user.init();
    return this.request<T>(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async delete<T>(user: User, endpoint: string): Promise<T> {
    await user.init();
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}
