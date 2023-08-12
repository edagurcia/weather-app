import styled from "styled-components";
import { device } from "../../helpers";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;

  h3 {
    display: flex;
    justify-content: end;
  }

  p {
    padding-left: 3.5rem;

    span {
      font-weight: 600;
    }
  }

  @media ${device.xs} {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      span {
        font-size: 1.2rem;
      }
    }
  }

  @media ${device.sm} {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    h1 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      span {
        font-size: 1.7rem;
      }
    }
  }

  @media ${device.sm} {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    h1 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      span {
        font-size: 1.7rem;
      }
    }
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: #e9ecef;
    margin-right: 1rem;
  }

  @media ${device.xs} {
    svg {
      font-size: 40px;
    }
  }

  @media ${device.sm} {
    svg {
      font-size: 70px;
    }
  }

  @media ${device.lg} {
    svg {
      font-size: 70px;
    }
  }
`;

export { HeaderContainer, LocationContainer };
