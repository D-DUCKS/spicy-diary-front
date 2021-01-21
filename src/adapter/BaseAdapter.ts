import axios, { AxiosInstance } from 'axios';

function BaseAdapter(defaultConfig: {}) {
  const instance: AxiosInstance = axios.create({
    ...defaultConfig,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
  });

  instance.interceptors.request.use(
    response => response.data,
    error => {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error();
      }
    }
  );

  return instance;
}

export default BaseAdapter;
