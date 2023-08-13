import { MdLocationPin } from "react-icons/md";
import { useApp } from "../../hooks";
import { HeaderContainer, LocationContainer } from "./style";

export const Header = () => {
  const { myLocation } = useApp();

  return (
    <HeaderContainer>
      <h3>Weather App</h3>
      <h6>By Edmundo Domínguez Agurcia</h6>
      <LocationContainer>
        <MdLocationPin />
        <h1>{myLocation?.name}</h1>
      </LocationContainer>
      <p>
        {myLocation?.region}, <span>{myLocation?.country}</span>
      </p>
    </HeaderContainer>
  );
};
