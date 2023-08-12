import styled from "styled-components";
import { device } from "../../helpers";

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const SearchInputContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 12px;

  label {
    padding-left: 0.5rem;
  }

  form {
    display: flex;
    background-color: #fff;
    border-radius: 12px;
    margin-top: 5px;

    input {
      width: 100%;
      border: none;
      outline: 0;
      padding: 0.5rem;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    button {
      width: 40px;
      height: 40px;
      border: none;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;

      background-color: #343a40;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
        background-color: #495057;
      }
    }

    svg {
      font-size: 25px;
      color: #f8f9fa;
    }

    @media ${device.xs} {
      width: 350px;
    }

    @media ${device.sm} {
      width: 450px;
    }
  }
`;

export { SearchBarContainer, SearchInputContainer };
