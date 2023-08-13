import styled from "styled-components";
import { device, shortDate } from "../../helpers";

export const Forecast = ({ forecast }) => {
  return (
    <ForecastContainer>
      <img
        src={forecast?.day?.condition?.icon}
        alt={forecast?.day?.condition?.text}
      />
      <h6> {forecast?.day?.condition?.text}</h6>
      <p>{shortDate(forecast?.date)}</p>
      <div>
        <p>
          max: {forecast?.day?.maxtemp_c}℃ | {forecast?.day?.maxtemp_f}℉{" "}
        </p>
        <p>
          min: {forecast?.day?.mintemp_c}℃ | {forecast?.day?.mintemp_f}℉
        </p>
      </div>
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h6 {
    color: #f8f9fa;
    margin-bottom: 5px;
  }

  @media ${device.xs} {
    width: 180px;

    h6 {
      font-size: 10px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 14px;
    }

    div {
      margin-top: 5px;
    }
  }

  @media ${device.sm} {
    width: 200px;

    h6 {
      font-size: 14px;
    }

    img {
      width: 70px;
      height: 70px;
    }

    p {
      font-size: 18px;
    }

    div {
      margin-top: 15px;
    }
  }
`;
