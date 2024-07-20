/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import sun_icon from "../assets/icons8-sun-64.png";
// import cloud_icon from "../assets/clouds.png";
// import rain_icon from "../assets/rain.png";
// import snow_icon from "../assets/snow.png";
import humidity from "../assets/humidity.svg"
import wind from "../assets/wind.svg"
// eslint-disable-next-line react/prop-types
export default function Weather({ country }) {
  const [weatherData, setWeatherData] = useState(false);

  // const weatherConditions = [sun_icon, cloud_icon, rain_icon, snow_icon];

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        temperature: data.main.temp,
        location: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        img: data.weather[0].icon,
      });
    } catch (error) {
      setWeatherData({
        temperature: `City Not Found`,
        location: `Not Found`,
        windSpeed: `0`,
        humidity: `0`,
      });
    }
  };
  useEffect(() => {
    search(country);
  });

  const temperature = Math.floor(weatherData.temperature);
  const checkTemperature = (temp) => {
    if (temp >= 35) return `أمرق كانتقدر`;
    else if (temp >= 25) return `أمرق بس ما تنداح`;
    else return `أبقى مااارق ما جو قعاد فالبيت`;
  };
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* <img src={sun_icon} alt="Sun" /> */}
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.img}@4x.png`}
            alt="Weather"
          />
          <p className="text-lg ">
            {Math.floor(weatherData.temperature)} 
            <sup>o</sup>C
          </p>
          <p className="text-bold text-xl">{checkTemperature(temperature)}</p>

          <p className="my-3 font-bold text-xl">{weatherData.location}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Wind Speed</p>
            <p className="font-bold my-2">{weatherData.windSpeed} km/hr</p>
            <img className="w-8 h-8" src={wind} alt="Wind speed" />
          </div>
          <div>
            <p>Humidity</p>
            <p className="font-bold my-2">{weatherData.humidity}%</p>
            <img className="w-8 h-8" src={humidity} alt="Humidity" />
          </div>
        </div>
      </div>
    </>
  );
}
