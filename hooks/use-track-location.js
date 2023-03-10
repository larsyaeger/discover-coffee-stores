import { useState } from "react";

export default function useTrackLocation() {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
    setIsFindingLocation(false);
  };
  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retreive your location");
  };
  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg("geolocation not supported by your browser");
      setIsFindingLocation(false);
    } else {
      //status.textContent = "Locating...";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  };
}
