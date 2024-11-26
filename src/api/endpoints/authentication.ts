import { Agent } from '../Agent.ts';

export async function login(body = {}) {
  const response: Response = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/Login`,
    body,
  );
  return response;
}

export async function getToken(body = {}) {
  const response: any = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/GenerateToken`,
    body,
  );
  return response.token;
}
