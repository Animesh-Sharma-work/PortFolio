import React from "react";
import "../css/WeatherAnimation.css";

// Helper function to map detailed API descriptions to a single keyword
const getWeatherKeyword = (description: string): string => {
  const lowerCaseDesc = description.toLowerCase();
  if (lowerCaseDesc.includes("thunderstorm")) return "thunderstorm";
  if (lowerCaseDesc.includes("drizzle")) return "drizzle";
  if (lowerCaseDesc.includes("rain")) return "rain";
  if (lowerCaseDesc.includes("snow") || lowerCaseDesc.includes("sleet"))
    return "snow";
  if (lowerCaseDesc.includes("clear")) return "clear";
  if (lowerCaseDesc.includes("clouds")) return "clouds";
  if (
    ["mist", "smoke", "haze", "dust", "fog", "sand", "ash"].some((p) =>
      lowerCaseDesc.includes(p)
    )
  ) {
    return "atmosphere";
  }
  return "clear"; // Default to 'clear' if no match
};

interface WeatherAnimationProps {
  description: string;
}

const WeatherAnimation: React.FC<WeatherAnimationProps> = ({ description }) => {
  const animationType = getWeatherKeyword(description);

  // Define how many particles to render for each effect
  const particleCount =
    {
      rain: 100,
      snow: 100,
      drizzle: 50,
    }[animationType] || 0;

  return (
    <div className={`weather-animation-background ${animationType}`}>
      {/* Render particles for rain, snow, and drizzle */}
      {particleCount > 0 &&
        [...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              // Randomize position and animation for a natural look
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`,
            }}
          />
        ))}

      {/* Render cloud elements */}
      {animationType === "clouds" && (
        <>
          <div className="cloud-particle base"></div>
          <div className="cloud-particle base"></div>
          <div className="cloud-particle base"></div>
        </>
      )}
    </div>
  );
};

export default WeatherAnimation;
