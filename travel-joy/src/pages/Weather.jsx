import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handleCheck = () => {
    setWeather(`Weather forecast for ${city} will appear here.`);
  };

  return (
    <div className="page weather-forecast card">
      <h2 className="centered">Check Weather</h2>
      <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleCheck}>Check Weather</button>
      {weather && <p>{weather}</p>}
    </div>
  );
}

export default Weather;