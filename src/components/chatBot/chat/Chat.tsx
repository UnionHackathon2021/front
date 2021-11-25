import React, { FC } from "react";
import { ChatBotImg } from "../../../asset";
import * as S from "../style";

type Props = {
  chatState: boolean;
};

const Chat: FC<Props> = (props) => {
  return (
    <S.Chatting>
      {props.chatState ? (
        <div className="myChatting">
          <div>
            <span>
              상품이 너무 예쁘지만 배송시간이 오래 걸리네요.이 너무 예쁘지만
              배송시간이 오래 걸리네요.이 너무 예쁘지만 배송시간이 오래
              걸리네요.이 너무 예쁘지만 배송시간이 오래 걸리네요.이 너무
              예쁘지만 배송시간이 오래 걸리네요...
            </span>
          </div>
        </div>
      ) : (
        <div className="chatBotChatting">
          <img src={ChatBotImg} alt="챗봇 이미지" />
          <div>
            <span className="chatBotName">도현</span>
            <span className="chatBotSpan">
              안녕하세요! 주문하신 상품은 마음에 드시나요? 후기를 남겨주세요!!
            </span>
          </div>
        </div>
      )}
    </S.Chatting>
  );
};

export default Chat;
