// API KEY: 50ed82754d4463602922bfb138532577

// Import FA Icons and more
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faDroplet,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <h1 className="text-center p-2 mb-2.5 bg-flamingo-100 text-white">
        Weathly 1.0
      </h1>

      <div className="flex justify-center">
        <div className="rounded-md shadow-md w-1/2 text-center">
          <input
            className="m-1.5 bg-gray-300 p-1.5 rounded-md shadow-md"
            type="text"
            placeholder="enter location..."
            id="location-input"
          />
          <button>
            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
          </button>
          <img src="https://picsum.photos/200" alt="cloudy with sun" />
          <p>33°C</p>
          <p></p>
          <span>
            <FontAwesomeIcon icon={faDroplet} />
          </span>{" "}
          20%
          <span>
            <FontAwesomeIcon icon={faCloudRain} />
          </span>{" "}
          20%
        </div>
      </div>
    </>
  );
};

export default Main;
