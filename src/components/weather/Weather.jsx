import { useApp } from "../../hooks";
import { shortDate } from "../../helpers";
import { Forecast } from "./Forecast";
import {
  WeatcherContainer,
  InfoContainer,
  InfoLocationContainer,
  InfoActualWeatherContainer,
  ForecastContainer,
} from "./style";

export const Weather = () => {
  const { searchedLocation, currentWeather } = useApp();

  /*
  currentWeather.forecast.forecastday
  */

  return (
    <WeatcherContainer>
      <InfoContainer>
        <InfoLocationContainer>
          <h6>Updated: {shortDate(currentWeather?.current?.last_updated)}</h6>
          <h3>{searchedLocation?.name}</h3>
          <p>{searchedLocation?.region}</p>
          <p>
            <span>{searchedLocation?.country}</span>
          </p>
        </InfoLocationContainer>
        <InfoActualWeatherContainer>
          <div>
            <p>
              <img
                src={currentWeather?.current?.condition?.icon}
                alt={currentWeather?.current?.condition?.text}
              />
              {currentWeather?.current?.condition?.text}
            </p>
          </div>
          <div>
            <h2>{currentWeather?.current?.temp_c} ℃</h2>
            <h2>{currentWeather?.current?.temp_f} ℉</h2>
          </div>
        </InfoActualWeatherContainer>
      </InfoContainer>

      <ForecastContainer>
        {currentWeather?.forecast?.forecastday?.map((forecast) => (
          <Forecast key={forecast?.date_epoch} forecast={forecast} />
        ))}
      </ForecastContainer>
    </WeatcherContainer>
  );
};
