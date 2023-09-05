// Import FA Icons and more
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faDroplet,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

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


  return (
    <>
      <h1 className="text-center p-2 mb-2.5 bg-flamingo-100 text-white sticky top-0">
        Weathly 1.0
      </h1>

      <div className="flex justify-center">
        <div className="rounded-md shadow-md w-1/2 text-center">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            className="m-1.5 bg-gray-300 p-1.5 rounded-md shadow-md"
            type="text"
            placeholder="enter location..."
            id="location-input"
          />
          <button>
            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
          </button>
          <p>{data.name}</p>
          {/* <img src="https://picsum.photos/200" alt="cloudy with sun" /> */}
          <div className="flex justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${id}.png`}
              alt="weather icon"
            />
          </div>
          {data.weather ? <p> {data.weather.icon}</p> : null}
          <>{data.main ? <p>{data.main.temp.toFixed(1)}°C</p> : null}</>
          <span>
            {/* <FontAwesomeIcon icon={faDroplet} /> */}
            Feels like:
            {/* <p>{data.main.humidity}</p> */}
          </span>{" "}
          {data.main ? <p>{data.main.feels_like.toFixed(1)}°C</p> : null}
          <span>
            {/* <FontAwesomeIcon icon={faCloudRain} /> */}
            Humidity:
          </span>{" "}
          {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
      </div>
    </>
  );
}

export default Main;
