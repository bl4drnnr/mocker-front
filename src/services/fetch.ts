import axios from 'axios';

export default class FetchService {
  static async get(url: string) {
    const { data } = await axios.get(url);
    return data;
  }
}
