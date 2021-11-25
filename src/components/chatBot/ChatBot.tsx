import React, { FC, useEffect, useState } from "react";
import { MikeOffIcon, MikeOnIcon, SendIcon } from "../../asset";
import SockJs from "sockjs-client";
import Stomp from "stompjs";
import Chat from "./chat/Chat";
import * as S from "./style";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { postReview } from "../../util/api/review";

type chatType = {
  id: boolean;
  content: string;
};

const sock = new SockJs("http://49.50.172.121:8080/ws");
const stompClient: Stomp.Client = Stomp.over(sock);

const ChatBot: FC = () => {
  const [mikeState, setMikeState] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [chatText, setChatText] = useState<string>("");
  const [chatList, setChatList] = useState<Array<chatType>>([
    {
      id: false,
      content: "안녕하세요! 솔직한 리뷰를 남겨주세요!!",
    },
  ]);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const speak = (text: string) => {
    if (
      typeof SpeechSynthesisUtterance === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1.5;
    speechMsg.pitch = 1.2;
    speechMsg.lang = "ko-KR";
    speechMsg.text = text;

    window.speechSynthesis.speak(speechMsg);
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("브라우저가 지원하지않습니다.");
  }

  useEffect(() => {
    if (!chatList[chatList.length - 1].id) {
      speak(chatList[chatList.length - 1].content);
    }
  }, [chatList]);

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/public", (data) => {
        setChatList((prev) => [
          ...prev,
          {
            content: data.body,
            id: false,
          },
        ]);
      });
    });
  }, []);

  const submitText = (e: any) => {
    if (e?.keyCode === 13) {
      setChatList((prev) => [
        ...prev,
        {
          content: chatText,
          id: true,
        },
      ]);
      stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatText));
      if (count === 0) {
        setCount(1);
        postReview(chatText);
      }
      setChatText("");
    }
  };

  const postReviewText = (chat: string) => {
    postReview(chat)
      .then((res) => {
        alert("리뷰를 성공적으로 달았습니다.");
      })
      .catch((error) => {
        alert("잠시 후 다시 시도하세요.");
      });
  };

  const handleListing = () => {
    window.speechSynthesis.cancel();
    resetTranscript();
    setMikeState(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    SpeechRecognition.stopListening();
    setChatText(transcript);
    setMikeState(false);
    resetTranscript();
  };

  return (
    <>
      <S.MainWrapper>
        <S.ContentWrapper>
          <span className="title">서울 어딘가 카페</span>
          <S.ChatBotWrapper>
            <S.ChatContent>
              {chatList.map((v, i) => {
                return <Chat key={i} chatState={v.id} content={v.content} />;
              })}
            </S.ChatContent>
            <div className="chatInput">
              <input
                placeholder="내용을 입력하세요."
                value={chatText}
                onKeyUp={submitText}
                onChange={(e) => {
                  setChatText(e.target.value);
                }}
              />
              <div>
                <img
                  src={mikeState ? MikeOnIcon : MikeOffIcon}
                  alt="음성인식 아이콘"
                  onClick={mikeState ? stopHandle : handleListing}
                />
                <img
                  src={SendIcon}
                  alt="전송"
                  className="sendIcon"
                  onKeyUp={submitText}
                  onClick={() => {
                    setChatList((prev) => [
                      ...prev,
                      {
                        content: chatText,
                        id: true,
                      },
                    ]);
                    stompClient.send(
                      "/app/chat.sendMessage",
                      {},
                      JSON.stringify(chatText)
                    );
                    if (count === 0) {
                      setCount(1);
                      postReview(chatText);
                    }
                    setChatText("");
                  }}
                />
              </div>
            </div>
          </S.ChatBotWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default ChatBot;
