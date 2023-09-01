/* import axios from "axios";
import React, { useEffect } from "react";

const FetchData = () => {
  const axios = require('axios');
  const API_KEY = "50ed82754d4463602922bfb138532577";
  const API_URL = "https://api.openweathermap.org/data/3.0/weather";

  const config = {
    params: {
      q: "Berlin",
      appid: API_KEY,
    },
  };

  // Get
  axios
    .get(API_URL, config)
    .then((response) => {
      const weatherData = response.data;
    })
    .catch((error) => {
      console.error("Fehler bei der API:", error);
    });
  return <div></div>;
};

export default FetchData; */

import React, { useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const lat = "52.4590856";
  const lon = "13.403328";
  const apiKey = "50ed82754d4463602922bfb138532577";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de_de&appid=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const weatherData = response.data;
        console.log(weatherData);
      } catch (error) {
        console.error("Fehler bei der API:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default FetchData;
