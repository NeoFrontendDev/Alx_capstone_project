import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "a604810e6fd3e68c80d0f896b5eaff5c";

  const handleCheck = async () => {
    if (!city) return;

    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== "200") {
        setError("City not found");
        setForecast([]);
        return;
      }

      const dailyData = data.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );

      setForecast(dailyData.slice(0, 5)); 
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="page weather-forecast card">
      <h2 className="centered">5-Day Weather Forecast</h2>

      <div className="weather-search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleCheck}>Check</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <h3>{new Date(day.dt_txt).toLocaleDateString()}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>{day.weather[0].description}</p>
            <p>Temp: {Math.round(day.main.temp)}°C</p>
            <p>Humidity: {day.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
