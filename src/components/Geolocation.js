import { useEffect, useState } from "react";

const Geolocation = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    console.log(`Latitude is`, lat);
    console.log(`Latitude is`, lon);
  });

  return <div>Geolocation</div>;
};

export default Geolocation;
