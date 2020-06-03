import api from './api';

function setSignIn(data) {
  api.post('/auth', data);
}

export default setSignIn;
