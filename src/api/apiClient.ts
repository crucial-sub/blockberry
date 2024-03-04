import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
