import { Provider } from "react-redux";
import { store } from "./store";
import { WeatherPage } from "./pages";
import { MainContainer, GlobalStyle } from "./styles";

export const WeatherApp = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <GlobalStyle />
        <WeatherPage />
      </MainContainer>
    </Provider>
  );
};
