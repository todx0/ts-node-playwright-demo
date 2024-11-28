import { Agent } from '@src/api/Agent';
import { User } from '@src/api/User';

export async function login(body = {}) {
  const response: LoginResponse = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/Login`,
    body,
  );
  return response;
}

export async function generateToken(body = {}) {
  const response: TokenResponse = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/GenerateToken`,
    body,
  );
  return response;
}

export async function getAuthorized(user: User) {
  const response: AuthorizedResponse = await Agent.getInstance().post(
    user,
    `${process.env.URL}/Account/v1/Authorized`,
    { userName: user.userDetails.userName, password: user.userDetails.password },
  );
  return response;
}

export async function createAccount(credentials: UserCredentials) {
  const response: CreateUserResponse = await Agent.getInstance().post(
    undefined,
    `${process.env.URL}/Account/v1/User`,
    credentials,
  );
  return response;
}

export async function deleteUser(user: User, uid: string) {
  const response: GenericResponse = await Agent.getInstance().delete(
    user,
    `${process.env.URL}/Account/v1/User/${uid}`,
  );
  return response;
}

export async function getUser(user: User, uid: string) {
  const response: GetUserResponse = await Agent.getInstance().get(
    user,
    `${process.env.URL}/Account/v1/User/${uid}`,
  );
  return response;
}
