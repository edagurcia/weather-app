import styled from "styled-components";
import { shortDate } from "../../helpers";

export const Forecast = ({ forecast }) => {
  return (
    <ForecastContainer>
      <p>{shortDate(forecast?.date)}</p>
      <p>
        <img
          src={forecast?.day?.condition?.icon}
          alt={forecast?.day?.condition?.text}
        />{" "}
        {forecast?.day?.condition?.text}
      </p>
      <p>
        Max: <span>{forecast?.day?.maxtemp_c} ℃</span>
      </p>
      <p>
        Min: <span>{forecast?.day?.mintemp_c} ℃</span>
      </p>
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #adb5bd;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-right: 10px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
