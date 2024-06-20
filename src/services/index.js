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

export const loginUser = async (payload) => {
  try {
    const response = await apiService.post(
      `/User/Login?password=${payload}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await apiService.get(`/Account?userId=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserFeature = async (id) => {
  try {
    const response = await apiService.get(`/Feature/userfeature/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getFeatureCategories = async () => {
  try {
    const response = await apiService.get('/FeatureCategory');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeatureByCategories = async (id) => {
  try {
    const response = await apiService.get(`/Feature/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
