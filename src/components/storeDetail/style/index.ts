import styled from "styled-components";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoreDetailWrapper = styled.div`
  width: 1000px;
  height: 730px;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const StoreContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  & .clubTitle {
    font-size: 25px;
  }

  & .clubAddress {
    font-size: 15px;
    color: #979797;
    margin-top: 5px;
  }

  & .tagList {
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    & span {
      font-size: 15px;
      color: #ff7777;
      padding: 4px 10px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
  }

  & .reviewBtnWrapper {
    width: 430px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    & button {
      width: 210px;
      height: 35px;
      border-radius: 3px;
      border: none;
      font-size: 15px;
    }

    & .writeReview {
      background-color: #4e4aff;
      color: white;
      cursor: pointer;
    }

    & .reviewCnt {
      background-color: white;
      border: 1px solid #c5c5c5;
      color: #909090;
    }
  }
`;

export const ReviewWrapper = styled.div`
  width: 590px;
  margin-top: 25px;
`;

export const ReviewContainer = styled.div`
  width: 590px;
  height: 385px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .reviewList {
    width: 90%;
    height: 330px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      height: 16px;
      background-color: #ff7777;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
    }
  }
`;

export const Review = styled.div`
  width: 300px;
  background: #f3f3f3;
  border-radius: 15px;
  padding: 20px 30px;
  position: relative;
  margin-left: 20px;
  display: flex;
  align-items: center;

  & img {
    position: absolute;
    left: 0;
    transform: translateX(-50%);
  }
`;

export const ChatBotWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 30px;
  right: 45px;

  & span {
    padding: 10px 15px;
    background-color: ${color.main};
    color: white;
    border-radius: 10px;
    margin-right: 15px;
  }
`;

export const ReviewRow = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  & .sentiment {
    margin-left: 15px;
    width: 150px;
    display: flex;
    justify-content: space-between;
    background: #f3f3f3;
    border-radius: 20px;
    padding: 10px 10px;
    color: ${color.main};

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
