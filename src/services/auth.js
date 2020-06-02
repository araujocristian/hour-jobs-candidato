import api from './api';

export function signIn(data) {
  api.post('/auth', data);
}
