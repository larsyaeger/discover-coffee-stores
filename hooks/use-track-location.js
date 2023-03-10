import { useState } from "react";

export default function useTrackLocation() {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
  };
  const error = () => {
    setLocationErrorMsg("Unable to retreive your location");
  };
  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setLocationErrorMsg("geolocation not supported by your browser");
    } else {
      //status.textContent = "Locating...";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
  };
}
