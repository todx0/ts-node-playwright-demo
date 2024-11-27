import { Agent } from '@src/api/Agent';

export async function login(body = {}) {
  const response: LoginResponse = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/Login`,
    body,
  );
  return response;
}

export async function getToken(body = {}) {
  const response: TokenResponse = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/GenerateToken`,
    body,
  );
  return response.token;
}
