import axios from 'axios';

const ApiClient = axios.create({
  baseURL: '/api'
});

export { ApiClient };
