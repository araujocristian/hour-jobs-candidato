import axios from 'axios';

const api = axios.create({
  baseURL: 'http://6bf3bded5c4d.ngrok.io',
});

export default api;
