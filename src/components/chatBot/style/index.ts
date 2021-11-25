import styled from "styled-components";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 36px;
    font-weight: bold;
    color: #818181;
    margin-bottom: 28px;
  }
`;

export const ChatBotWrapper = styled.div`
  width: 1000px;
  height: 700px;

  background-color: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .chatInput {
    width: 85%;
    height: 37px;
    background: #f8f8f8;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    & input {
      width: 80%;
      margin-left: 30px;
      font-size: 14px;
      background-color: #f8f8f8;
      border: none;
    }

    & .sendIcon {
      margin-right: 20px;
      margin-left: 10px;
    }
  }
`;

export const ChatContent = styled.div`
  width: 85%;
  height: 460px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chatting = styled.div`
  margin-bottom: 10px;

  & .chatBotChatting {
    display: flex;

    & img {
      width: 50px;
      height: 50px;
    }

    & div {
      display: flex;
      flex-direction: column;
      margin-left: 17px;
    }
  }

  & .chatBotName {
    font-size: 15px;
    color: #747474;
  }

  & .chatBotSpan {
    width: 350px;
    font-size: 14px;
    color: black;
    padding: 10px 19px;
    background-color: #f8f8f8;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }

  & .myChatting {
    width: 100%;
    display: flex;
    justify-content: end;

    & div {
      width: 355px;
      padding: 10px 19px;
      border-radius: 20px;
      background-color: ${color.main};
      color: white;
      font-size: 14px;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
