// Import FA Icons and more
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import mainLogo from "../assets/logo.png";

function Main() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const searchLocation = (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=50ed82754d4463602922bfb138532577&units=metric`;
    event.preventDefault();
    axios
      .get(url)
      .then((response) => {
        if (response.statusText !== "OK") return;
        console.log("Success");
        console.log(response);
        setData(response.data);
        setId(response.data.weather[0].icon);
        setError("");
      })
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
      .finally(() => {
        console.log("submitted");
        setLocation("");
      });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-950 flex flex-col  min-h-screen">
      {/* <img
        className="mx-auto p-4"
        src={mainLogo}
        alt="Wealthly 1.0 Logo"
        width="128px"
      />
      <h1 className="text-center text-black border-1 dark:text-white">
        Weathly 1.0
      </h1> */}
      {/* <div className="grid justify-items-center h-screen"> */}
      <div className="flex flex-grow  pt-[10rem] ">
        <div className="rounded-2xl border-2 drop-shadow-2xl sm:w-2/6 md:w-3/6 lg:w-4/6 text-center m-auto bg-slate-300 dark:border-slate-400 dark:bg-slate-900 dark:text-white">
          <form className="py-1" onSubmit={searchLocation}>
            <input
              ref={inputRef}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-4 mb-4 bg-slate-200 dark:bg-slate-600 dark:text-white p-1.5 rounded-md shadow-md "
              type="text"
              placeholder="Enter location..."
              id="location-input"
            />
            {/* <button type="submit">
              <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
            </button> */}
          </form>
          {/* Error Message (Bad Request, Invalid Input, ...) */}
          {error && (
            <div className="mb-3 bg-red-600 text-white px-4 py-3 shadow-md">
              {/* <img
                className="mx-auto m-3"
                src={errorLogo}
                alt="An Error Message"
                width="128px"
              /> */}

              {error}
            </div>
          )}
          {!error && data && (
            <div>
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
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Feels like</span>{" "}
                  <p className="text-3xl">
                    {data.main.feels_like.toFixed(1)}°C
                  </p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Temp min.</span>{" "}
                  <p className="text-3xl">{data.main.temp_min.toFixed(1)}°C</p>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-4 text-l">
                  <span>Temp max.</span>{" "}
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
      <div className=" w-full p-4 mt-2.5 text-black dark:text-white dark:bg-slate-900 bg-slate-200 ">
        Made by L & F with{" "}
        <FontAwesomeIcon style={{ color: "#c6cfdc" }} icon={faHeart} />
      </div>
    </div>
  );
}

export default Main;
