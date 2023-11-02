import React, { useState, useEffect } from "react";
import "./MyPlace.css"

function MyTown() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

    useEffect(() => {
        const apiKey = "d1d4b11b28304c92c76714137e240ee9";
        const lat = 44.651070;
        const lon = -63.582687;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => setWeatherData(data))
          .catch(err => console.log(err));
      }, []);

    return (
      <div className="centered-container">
        <div className="content-box">
          <h1>I live in HALIFAX NS</h1>
          <img src="Halifax pic.jpg" alt="Halifax" />
          {weatherData && (
            <div>
              <img
                src={`${
                  ((weatherData.main.temp - 273.15).toFixed(2)) <= 10
                    ? "cold.png"
                    : ((weatherData.main.temp - 273.15).toFixed(2)) > 10 && ((weatherData.main.temp - 273.15).toFixed(2)) < 20
                    ? "mild.png"
                    : "sunny.png"
                }`}
                alt="Weather Icon"
              />
              <p>Current Temperature: {((weatherData.main.temp - 273.15).toFixed(2))}°C</p>
              <button onClick={() => setIsCelsius(!isCelsius)}>
                Change to {isCelsius ? "°F" : "°C"}
              </button>
              <p>
                {isCelsius
                  ? `${((weatherData.main.temp - 273.15).toFixed(2))}°C`
                  : `${(((weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F`}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default MyTown;