import React, { useState, useEffect } from "react";
import { X, Thermometer, Wind, Droplets, Eye, Search } from "lucide-react";
import { WeatherData } from "../types";
import { fetchWeatherData } from "../services/weatherApi";
import WeatherAnimation from "./WeatherAnimation"; // 1. Import the new component

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WeatherModal: React.FC<WeatherModalProps> = ({ isOpen, onClose }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setWeather(null);
        setSearchCity("");
        setError(null);
        setCity("");
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const fetchWeather = async () => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeatherData(searchCity);
      setWeather(weatherData);
      setCity(searchCity);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchWeather();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />

        {/* 2. Add 'overflow-hidden' to clip the animation within the modal's rounded corners */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-md mx-4 overflow-hidden">
          {/* 3. Render the animation component in the background */}
          {weather && !loading && (
            <WeatherAnimation description={weather.weather[0].description} />
          )}

          {/* 4. Wrap all content in a div with 'relative z-10' to place it on top of the animation */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Weather Dashboard
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter city name..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={loading || !searchCity}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </form>

            {!weather && !loading && !error && (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Enter a city name to get weather information
                </p>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">
                  {error}
                </p>
                <button
                  onClick={fetchWeather}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  Try Again
                </button>
              </div>
            )}

            {loading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Loading weather data...
                </p>
              </div>
            )}

            {weather && !loading && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {weather.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 capitalize">
                    {weather.weather[0].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* 5. Added backdrop-blur and semi-transparent backgrounds for better readability */}
                  <div className="bg-blue-50/70 dark:bg-blue-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Thermometer className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Temperature
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {Math.round(weather.main.temp)}°C
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Feels like {Math.round(weather.main.feels_like)}°C
                    </p>
                  </div>

                  <div className="bg-green-50/70 dark:bg-green-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wind className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Wind Speed
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.wind.speed} m/s
                    </p>
                  </div>

                  <div className="bg-purple-50/70 dark:bg-purple-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:col-span-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Droplets className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Humidity
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {weather.main.humidity}%
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50/70 dark:bg-yellow-900/50 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-yellow-600" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Live weather data from OpenWeather API
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModal;
