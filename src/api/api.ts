import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Api = axios.create({
  baseURL: '',
  auth: {
    username: '',
    password: ''
  },
  withCredentials: true,
});

export { Api };
