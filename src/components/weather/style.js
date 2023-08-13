import styled from "styled-components";
import { device } from "../../helpers";

const WeatcherContainer = styled.section`
  width: 100%;
  padding: 1rem;
  margin-top: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const InfoLocationContainer = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  h6 {
    font-size: 10px;
    color: #f8f9fa;
  }

  p {
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }

  @media ${device.xs} {
    width: 50%;
  }

  @media ${device.sm} {
    width: 200px;
  }
`;

const InfoActualWeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    p {
      img {
        margin-bottom: -20px;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    h2 {
      width: 100px;
      display: flex;
      justify-content: end;
    }
  }

  @media ${device.xs} {
    width: 50%;
  }

  @media ${device.sm} {
    width: 220px;
  }
`;

const ForecastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export {
  WeatcherContainer,
  InfoContainer,
  InfoLocationContainer,
  InfoActualWeatherContainer,
  ForecastContainer,
};
