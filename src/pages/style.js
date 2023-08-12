import styled from "styled-components";
import { device } from "../helpers";

const PageContainer = styled.main`
  @media ${device.xs} {
    width: 100%;
  }

  @media ${device.sm} {
    width: 700px;
  }

  @media ${device.lg} {
    width: 1000px;
  }
`;

export { PageContainer };
