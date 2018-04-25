import request from '../utils/request';
import { getAuthority } from '../utils/authority';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/user/verifyToken', {
    method: 'POST',
    headers: {
      accessToken: getAuthority(),
    },
  });
}
