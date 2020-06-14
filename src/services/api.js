import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hourjob-api.herokuapp.com',
});

export default api;
