// Import FA Icons and more
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const searchLocation = (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=50ed82754d4463602922bfb138532577&units=metric`;
    event.preventDefault();
    /* Call api data */
    axios
      .get(url)
      .then((response) => {
        /* response check, if not ok, continue to error */
        if (response.statusText !== "OK") return;
        console.log("Success");
        console.log(response);
        setData(response.data);
        setId(response.data.weather[0].icon);
        setError("");
      })
      /* error handling */
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          const message = error.response.data.message;
          const capitalizedMessage =
            message[0].toUpperCase() + message.slice(1);
          setError(`${capitalizedMessage}! Please Enter a valid location.`);
        } else if (error.request) {
          console.log(error.request);
          setError("Bad request!");
        } else {
          console.log(error);
          setError(`Error: ${error.message}`);
        }
      })
      /* if all good, then finally */
      .finally(() => {
        console.log("submitted");
        setLocation("");
      });
  };
  /* focus on input */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className=" flex flex-col my-screen">
      {" "}
      {/* body div */}
      <div className="flex flex-grow bg-slate-100 dark:bg-slate-950  pt-[5rem] pb-[2.5rem] ">
        {" "}
        {/* widget div */}
        <div className="rounded-2xl border-2 drop-shadow-2xl sm:w-2/6 md:w-3/6 lg:w-4/6 text-center m-auto bg-slate-300 dark:border-slate-400 dark:bg-slate-900 dark:text-white">
          {" "}
          {/* widget styling div */}
          <form className="py-1" onSubmit={searchLocation}>
            {" "}
            {/* input form */}
            <input
              ref={inputRef}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-4 mb-4 bg-slate-200 dark:bg-slate-600 dark:text-white p-1.5 rounded-md shadow-md "
              type="text"
              placeholder="Enter location..."
              id="location-input"
            />
          </form>
          {/* if any type of error, hide secondary widget */}
          {error && (
            <div className="mb-3 bg-red-600 text-white px-4 py-3 shadow-md">
              {error}
            </div>
          )}
          {!error && data && (
            <div>
              {/* weather icon */}
              <p className="text-2xl">{data.name}</p>
              <div className="flex justify-center">
                <img
                  className=""
                  src={`https://openweathermap.org/img/wn/${id}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <p> {data.weather.icon}</p>
              <h3 className="text-sm m-1.5">{data.weather[0].description}</h3>
              <p className="text-4xl">{data.main.temp.toFixed(1)}°C</p>
              <div className="grid m-5 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* additional weather data */}
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Feels like</span>{" "}
                  <p className="text-3xl">
                    {data.main.feels_like.toFixed(1)}°C
                  </p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>min Temp.</span>{" "}
                  <p className="text-3xl">{data.main.temp_min.toFixed(1)}°C</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>max Temp.</span>{" "}
                  <p className="text-3xl">{data.main.temp_max.toFixed(1)}°C</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Humidity</span>{" "}
                  <p className="text-3xl">{data.main.humidity}%</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Windspeed</span>{" "}
                  <p className="text-3xl">{data.wind.speed} km/h</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Air Pressure</span>{" "}
                  <p className="text-3xl">{data.main.pressure} hPa</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* the footer :) */}
      <div className=" w-full font-bold text-center p-4 mt-auto text-black dark:text-white dark:bg-slate-900 bg-slate-200 ">
        Made by Leonard Kehl & Felix Werner{" "}
        <FontAwesomeIcon icon={faCopyright} />
      </div>
    </div>
  );
}

export default Main;
