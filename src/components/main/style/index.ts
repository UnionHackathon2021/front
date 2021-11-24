import styled from "styled-components";

export const MainWrapper = styled.body`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const StoreList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StoreCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;
