import axios from 'axios';
import { WeatherData } from '../types';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  if (!API_KEY) {
    throw new Error('OpenWeather API key is not configured. Please add VITE_OPENWEATHER_API_KEY to your .env file.');
  }

  if (!city.trim()) {
    throw new Error('Please enter a city name');
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      } else if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenWeather API key.');
      } else {
        throw new Error('Failed to fetch weather data. Please try again.');
      }
    }
    throw new Error('An unexpected error occurred.');
  }
};