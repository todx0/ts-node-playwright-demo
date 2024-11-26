import { FetchFunction } from '../src/types';

export async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt < retries) {
        await new Promise((res) => setTimeout(res, delay));
      } else {
        throw new Error(`All ${retries} attempts failed: ${(error as Error).message}`);
      }
    }
  }
  throw new Error('Unexpected error: Retry logic did not return.');
}

export const retryFetch: FetchFunction = (input, init, retries = 3, delay = 1000) => {
  return retry(() => fetch(input, init), retries, delay);
};
