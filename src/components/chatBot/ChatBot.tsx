import React, { FC, useState } from "react";
import { ChatBotImg, MikeOffIcon, MikeOnIcon, SendIcon } from "../../asset";
import Chat from "./chat/Chat";
import * as S from "./style";

const ChatBot: FC = () => {
  const [mikeState, setMikeState] = useState<boolean>(false);

  return (
    <>
      <S.MainWrapper>
        <S.ContentWrapper>
          <span className="title">서울 어딘가 카페</span>
          <S.ChatBotWrapper>
            <S.ChatContent>
              {[...Array(11)].map((v, i) => {
                return <Chat chatState={i % 2 !== 0} />;
              })}
            </S.ChatContent>
            <div className="chatInput">
              <input placeholder="내용을 입력하세요." />
              <div>
                <img
                  src={mikeState ? MikeOnIcon : MikeOffIcon}
                  alt="음성인식 아이콘"
                />
                <img src={SendIcon} alt="전송" className="sendIcon" />
              </div>
            </div>
          </S.ChatBotWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ChatBot;
