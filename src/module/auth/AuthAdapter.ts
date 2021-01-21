import { AxiosInstance } from 'axios';
import BaseAdapter from 'adapter/BaseAdapter';

export default class AuthAdapter {
  private adapter: AxiosInstance;

  constructor() {
    this.adapter = BaseAdapter({ baseURL: 'http://localhost:8080/auth' });
  }

  login = (id: string, pwd: string) => {
    return this.adapter.post(`/auth`, {
      id,
      pwd
    });
  };
}
