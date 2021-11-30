import type { User } from '../types/user';

class UserApi {
  async getUsers(): Promise<User[]> {
    try {
      const res = await fetch('api/users', {
        method: 'GET',
      });
      const jsonResponse = (await res.json()) as User[];
      console.log(jsonResponse);
      return jsonResponse;
    } catch (err) {
      console.error('test');
    }
    return [];
  }
}

export const userApi = new UserApi();
