import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoreList = styled.div`
  width: 950px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const StoreCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & .lookIcon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    margin-top: 15px;
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  & .storeName {
    font-size: 16px;
  }

  span {
    font-size: 12px;
    color: #969696;
    margin-top: 5px;
  }
`;
