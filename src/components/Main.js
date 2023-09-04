// API KEY: 50ed82754d4463602922bfb138532577

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
  const [data, setData] = useState({});
  const [location, setLocation] = useState(``);


const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=(INSERT_API)&units=metric`;
// CENSOR API BEFORE ADDING/PUSHING

const searchLocation = (event) => {
  if (event.key === `Enter`) {

    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
    })
  }
}


  return (
    <>
      <h1 className="text-center p-2 mb-2.5 bg-flamingo-100 text-white sticky top-0">
        Weathly 1.0
      </h1>

      <div className="flex justify-center">
        <div className="rounded-md shadow-md w-1/2 text-center">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress = {searchLocation}
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
          <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
        
          {data.weather ? <p> {data.weather.icon}</p> : null}
          
          <>
          {data.main ? <p>{data.main.temp}°C</p> : null}
          </>
        
          <span>
            {/* <FontAwesomeIcon icon={faCloudRain} /> */}
            Humidity:
          </span>{" "}
          {data.main ? <p>{data.main.humidity}%</p> : null}
          <span>
            {/* <FontAwesomeIcon icon={faDroplet} /> */}
            Feels like:
            {/* <p>{data.main.humidity}</p> */}
          </span>{" "}
          {data.main ? <p>{data.main.feels_like}°C</p> : null}
          

        </div>
      </div>
    </>
  );
};

export default Main;
