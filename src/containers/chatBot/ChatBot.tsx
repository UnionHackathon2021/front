import React, { FC, Suspense } from "react";
import { ChatBot, Header } from "../../components";

const ChatBotContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <ChatBot />
    </Suspense>
  );
};

export default ChatBotContainer;
