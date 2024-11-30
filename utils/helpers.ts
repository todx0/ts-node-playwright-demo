import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export async function retry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			if (attempt < retries) {
				await new Promise((res) => setTimeout(res, delay));
			} else {
				throw new Error(`All ${retries} attempts failed: ${error.message}`);
			}
		}
	}
	throw new Error('Unexpected error: Retry logic did not return.');
}

export function retryFetch(input: RequestInfo, init?: RequestInit, retries = 3, delay = 1000): Promise<Response> {
	return retry(() => fetch(input, init), retries, delay);
}

export function getTestUsers(): string[] {
	const filePath = join(__dirname, '../test-data/users');
	const data = readFileSync(filePath, 'utf-8');
	if (!data) throw new Error('No test users available.');
	return data
		.split('\n')
		.map((email) => email.trim())
		.filter((email) => email.length > 0);
}
