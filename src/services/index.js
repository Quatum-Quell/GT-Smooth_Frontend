import axios from 'axios';

const API_BASE_URL = 'https://quantum-queil.azurewebsites.net/api';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  responseType: 'json',
});

export const getFeatures = async () => {
  try {
    const response = await apiService.get('/Feature');
    return response.data;
  } catch (error) {
    throw error;
  }
};
