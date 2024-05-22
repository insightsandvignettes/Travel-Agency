// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api-url.com';

export const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};
