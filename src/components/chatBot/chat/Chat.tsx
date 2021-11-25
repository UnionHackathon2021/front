import React, { FC, useEffect } from "react";
import { ChatBotImg } from "../../../asset";
import * as S from "../style";

type Props = {
  chatState: boolean;
  content: string;
};

const Chat: FC<Props> = (props) => {

  return (
    <S.Chatting>
      {props.chatState ? (
        <div className="myChatting">
          <div>
            <span>{props.content}</span>
          </div>
        </div>
      ) : (
        <div className="chatBotChatting">
          <img src={ChatBotImg} alt="챗봇 이미지" />
          <div>
            <span className="chatBotName">도현</span>
            <span className="chatBotSpan">{props.content}</span>
          </div>
        </div>
      )}
    </S.Chatting>
  );
};

export default Chat;
