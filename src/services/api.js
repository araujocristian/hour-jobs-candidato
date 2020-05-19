import axios from 'axios';

const api = axios.create({
  baseURL: 'http://69d0c665.ngrok.io',
});

export default api;
