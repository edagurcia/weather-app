import styled from "styled-components";

const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export { MainContainer };
