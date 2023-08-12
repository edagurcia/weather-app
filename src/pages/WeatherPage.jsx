import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useApp } from "../hooks/useApp";
import { Header, SearchBar, Weather } from "../components";
import { PageContainer } from "./style";

export const WeatherPage = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [city, setCity] = useState("");

  const { startGetMyActualCity, startGetWeatherByCity } = useApp();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLat(pos.lat);
          setLng(pos.lng);
        },
        function () {
          toast.error("Hubo un error, por favor recargue la aplicación.");
          return;
        }
      );
    } else {
      toast.error("Su navegador no es compatible con esta aplicación");
      return;
    }
  }, []);

  useEffect(() => {
    if (lat !== "" && lng !== "") {
      startGetMyActualCity(lat, lng, setCity);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (city !== "") {
      startGetWeatherByCity(city);
    }
  }, [city]);

  return (
    <PageContainer>
      <Header />
      <SearchBar />
      <Weather />
      <Toaster position="top-right" richColors expand={true} theme="dark" />
    </PageContainer>
  );
};
