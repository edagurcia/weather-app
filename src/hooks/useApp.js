import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setCurrentWeather,
  setMyLocation,
  setSearchedLocation,
} from "../features";

export const useApp = () => {
  const dispatch = useDispatch();
  const { myLocation, searchedLocation, currentWeather } = useSelector(
    (state) => state.app
  );

  const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

  const startGetMyActualCity = async (lat, lng, setCity) => {
    const API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${lat}${lng}/nearbyPlaces`;

    try {
      const options = {
        method: "GET",
        url: API_URL,
        params: { radius: "3" },
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      };

      const { data } = await axios.request(options);
      setCity(data.data[0].name);
      dispatch(setMyLocation(data.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const startGetWeatherByCity = async (city) => {
    const lookUpCity = city === "Comayaguela" ? "Tegucigalpa" : city;

    try {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: {
          q: lookUpCity,
          days: "3",
        },
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const { data } = await axios.request(options);

      const searchedLocation = data.location;
      const currentWeather = {
        forecast: data.forecast,
        current: data.current,
      };

      dispatch(setCurrentWeather(currentWeather));
      dispatch(setSearchedLocation(searchedLocation));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    myLocation,
    searchedLocation,
    currentWeather,
    startGetMyActualCity,
    startGetWeatherByCity,
  };
};
