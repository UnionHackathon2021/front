import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: white;
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;

  & .logo {
    margin-left: 20px;
    margin-right: 15px;
  }

  img {
    cursor: pointer;
  }
`;
