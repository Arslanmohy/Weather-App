import React from "react";
import { useState, useEffect } from "react";
const WeatherCard = ({ weather }) => {
  const [weatherIcon, setWeatherIcon] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = weather;
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherIcon("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherIcon("wi-dust");
          break;
        case "Clear":
          setWeatherIcon("wi-day-sunny");
          break;
        case "Mist":
          setWeatherIcon("wi-fog");
          break;
        default:
          setWeatherIcon("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = `${date.getHours()}: ${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                Sunset
                <br />
                {time}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                Humidity <br /> {humidity}
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                Pressure <br /> {pressure}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                Speed <br /> {speed}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
